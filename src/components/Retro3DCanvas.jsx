import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Center, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

// 1. Classic 1989 Retro Handheld Console (Game Boy Style)
function HandheldConsole({ renderMode }) {
  const group = useRef();

  // Materials based on renderMode
  const materials = useMemo(() => {
    const isClay = renderMode === 'clay';
    const isWire = renderMode === 'wireframe';

    if (isClay) {
      const clayMat = new THREE.MeshStandardMaterial({
        color: '#b8aba0',
        roughness: 0.85,
        metalness: 0.05,
      });
      return { body: clayMat, screen: clayMat, screenGlass: clayMat, dpad: clayMat, buttons: clayMat, accents: clayMat };
    }

    if (isWire) {
      const wireMat = new THREE.MeshStandardMaterial({
        color: '#1a1918',
        roughness: 0.9,
        wireframe: true,
      });
      const wireAccent = new THREE.MeshBasicMaterial({
        color: '#a3e635',
        wireframe: true,
      });
      return { body: wireMat, screen: wireAccent, screenGlass: wireMat, dpad: wireAccent, buttons: wireAccent, accents: wireMat };
    }

    // Default textured materials
    return {
      body: new THREE.MeshStandardMaterial({
        color: '#d6d2c4',
        roughness: 0.45,
        metalness: 0.1,
      }),
      screenBezel: new THREE.MeshStandardMaterial({
        color: '#656972',
        roughness: 0.35,
        metalness: 0.15,
      }),
      screenGlass: new THREE.MeshStandardMaterial({
        color: '#8bac0f',
        roughness: 0.2,
        metalness: 0.2,
        emissive: '#306230',
        emissiveIntensity: 0.35,
      }),
      dpad: new THREE.MeshStandardMaterial({
        color: '#242323',
        roughness: 0.5,
      }),
      buttons: new THREE.MeshStandardMaterial({
        color: '#a62447',
        roughness: 0.35,
      }),
      rubber: new THREE.MeshStandardMaterial({
        color: '#555555',
        roughness: 0.7,
      }),
    };
  }, [renderMode]);

  return (
    <group ref={group}>
      {/* Console Main Body */}
      <mesh castShadow receiveShadow material={materials.body} position={[0, 0, 0]}>
        <boxGeometry args={[2.4, 3.8, 0.7]} />
      </mesh>

      {/* Screen Bezel (Recessed dark plate) */}
      <mesh position={[0, 0.75, 0.36]} material={materials.screenBezel || materials.body}>
        <boxGeometry args={[2.0, 1.8, 0.05]} />
      </mesh>

      {/* Retro LCD Screen */}
      <mesh position={[0, 0.8, 0.39]} material={materials.screenGlass}>
        <planeGeometry args={[1.4, 1.25]} />
      </mesh>

      {/* Battery LED (Red light) */}
      <mesh position={[-0.8, 0.85, 0.39]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.8} />
      </mesh>

      {/* D-Pad Horizontal */}
      <mesh position={[-0.6, -0.4, 0.39]} material={materials.dpad}>
        <boxGeometry args={[0.7, 0.24, 0.1]} />
      </mesh>
      {/* D-Pad Vertical */}
      <mesh position={[-0.6, -0.4, 0.39]} material={materials.dpad}>
        <boxGeometry args={[0.24, 0.7, 0.1]} />
      </mesh>

      {/* Action Buttons A & B (Tilted) */}
      <group position={[0.6, -0.3, 0.39]} rotation={[0, 0, -Math.PI / 6]}>
        {/* B Button */}
        <mesh position={[-0.24, 0, 0]} material={materials.buttons}>
          <cylinderGeometry args={[0.13, 0.13, 0.1, 24]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
        {/* A Button */}
        <mesh position={[0.24, 0, 0]} material={materials.buttons}>
          <cylinderGeometry args={[0.13, 0.13, 0.1, 24]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
      </group>

      {/* Start / Select Buttons */}
      <group position={[0, -1.0, 0.38]} rotation={[0, 0, -Math.PI / 7]}>
        <mesh position={[-0.25, 0, 0]} material={materials.rubber || materials.body}>
          <boxGeometry args={[0.3, 0.09, 0.06]} />
        </mesh>
        <mesh position={[0.25, 0, 0]} material={materials.rubber || materials.body}>
          <boxGeometry args={[0.3, 0.09, 0.06]} />
        </mesh>
      </group>

      {/* Speaker Grill Slits */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={i}
          position={[0.5 + i * 0.11, -1.35 - i * 0.04, 0.36]}
          rotation={[0, 0, -Math.PI / 6]}
          material={materials.dpad}
        >
          <boxGeometry args={[0.35, 0.03, 0.02]} />
        </mesh>
      ))}

      {/* Bottom Headphone Jack Inset */}
      <mesh position={[-0.2, -1.9, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.05, 16]} />
        <meshBasicMaterial color="#111" />
      </mesh>
    </group>
  );
}

// 2. Vintage 90s Desktop Computer (Macintosh Classic Style)
function VintageMacComputer({ renderMode }) {
  const materials = useMemo(() => {
    const isClay = renderMode === 'clay';
    const isWire = renderMode === 'wireframe';

    if (isClay) {
      const mat = new THREE.MeshStandardMaterial({
        color: '#b5a698',
        roughness: 0.85,
        metalness: 0.05,
      });
      return { body: mat, screen: mat, bezel: mat, keys: mat, dark: mat };
    }

    if (isWire) {
      const wireMat = new THREE.MeshStandardMaterial({
        color: '#1a1918',
        roughness: 0.9,
        wireframe: true,
      });
      const wireAccent = new THREE.MeshBasicMaterial({
        color: '#f59e0b',
        wireframe: true,
      });
      return { body: wireMat, screen: wireAccent, bezel: wireMat, keys: wireAccent, dark: wireMat };
    }

    return {
      body: new THREE.MeshStandardMaterial({
        color: '#ded4c0',
        roughness: 0.55,
        metalness: 0.1,
      }),
      screen: new THREE.MeshStandardMaterial({
        color: '#142219',
        roughness: 0.15,
        metalness: 0.4,
        emissive: '#10391d',
        emissiveIntensity: 0.5,
      }),
      bezel: new THREE.MeshStandardMaterial({
        color: '#c2b69f',
        roughness: 0.6,
      }),
      keys: new THREE.MeshStandardMaterial({
        color: '#eae2d1',
        roughness: 0.4,
      }),
      dark: new THREE.MeshStandardMaterial({
        color: '#282521',
        roughness: 0.8,
      }),
    };
  }, [renderMode]);

  return (
    <group position={[0, -0.3, 0]}>
      {/* Main Macintosh Body */}
      <mesh castShadow receiveShadow position={[0, 0.8, 0]} material={materials.body}>
        <boxGeometry args={[2.5, 2.7, 2.3]} />
      </mesh>

      {/* Recessed Screen Area */}
      <mesh position={[0, 1.15, 1.16]} material={materials.bezel}>
        <boxGeometry args={[2.0, 1.6, 0.1]} />
      </mesh>

      {/* Curved CRT Screen Glass */}
      <mesh position={[0, 1.15, 1.22]} material={materials.screen}>
        <sphereGeometry args={[1.1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 3]} />
      </mesh>

      {/* 3.5" Floppy Disk Slot */}
      <mesh position={[0.45, 0.1, 1.16]} material={materials.dark}>
        <boxGeometry args={[0.9, 0.08, 0.05]} />
      </mesh>

      {/* Floppy Eject Hole */}
      <mesh position={[0.95, 0.1, 1.16]} material={materials.dark}>
        <cylinderGeometry args={[0.02, 0.02, 0.04, 12]} rotation={[Math.PI / 2, 0, 0]} />
      </mesh>

      {/* Vintage Computer Keyboard */}
      <group position={[0, -0.7, 1.3]} rotation={[Math.PI / 16, 0, 0]}>
        {/* Keyboard base tray */}
        <mesh castShadow material={materials.body} position={[0, 0, 0]}>
          <boxGeometry args={[2.7, 0.22, 1.1]} />
        </mesh>

        {/* Keyboard Keys grid */}
        {[-1.1, -0.7, -0.3, 0.1, 0.5, 0.9].map((x, i) => (
          <group key={i}>
            {[-0.3, -0.1, 0.1, 0.3].map((z, j) => (
              <mesh key={j} position={[x, 0.13, z]} material={materials.keys}>
                <boxGeometry args={[0.25, 0.08, 0.16]} />
              </mesh>
            ))}
          </group>
        ))}

        {/* Spacebar */}
        <mesh position={[-0.1, 0.13, -0.35]} material={materials.keys}>
          <boxGeometry args={[1.2, 0.08, 0.16]} />
        </mesh>
      </group>
    </group>
  );
}

// 3. Flowerbomb Viktor & Rolf Inspired Luxury 3D Fragrance Bottle (from LinkedIn banner)
function FragranceBottle({ renderMode }) {
  const materials = useMemo(() => {
    const isClay = renderMode === 'clay';
    const isWire = renderMode === 'wireframe';

    if (isClay) {
      const mat = new THREE.MeshStandardMaterial({
        color: '#c0b4a8',
        roughness: 0.8,
      });
      return { glass: mat, metal: mat, band: mat, fluid: mat };
    }

    if (isWire) {
      const wireMat = new THREE.MeshStandardMaterial({
        color: '#1a1816',
        wireframe: true,
      });
      const wireGold = new THREE.MeshBasicMaterial({
        color: '#eab308',
        wireframe: true,
      });
      return { glass: wireGold, metal: wireMat, band: wireGold, fluid: wireGold };
    }

    return {
      glass: new THREE.MeshPhysicalMaterial({
        color: '#161414',
        roughness: 0.1,
        metalness: 0.2,
        transmission: 0.65,
        thickness: 1.5,
        reflectivity: 0.9,
        clearcoat: 1.0,
      }),
      metal: new THREE.MeshStandardMaterial({
        color: '#d4af37',
        roughness: 0.25,
        metalness: 0.9,
      }),
      blackMetal: new THREE.MeshStandardMaterial({
        color: '#1c1b1a',
        roughness: 0.3,
        metalness: 0.8,
      }),
      fluid: new THREE.MeshStandardMaterial({
        color: '#7f1d1d',
        roughness: 0.2,
        emissive: '#450a0a',
        emissiveIntensity: 0.4,
      }),
    };
  }, [renderMode]);

  return (
    <group position={[0, -0.2, 0]}>
      {/* Multi-faceted Grenade style glass body (Icosahedron base) */}
      <mesh castShadow receiveShadow material={materials.glass}>
        <icosahedronGeometry args={[1.4, 1]} />
      </mesh>

      {/* Internal perfume core glowing red like the banner */}
      <mesh material={materials.fluid}>
        <sphereGeometry args={[1.0, 24, 24]} />
      </mesh>

      {/* Waist branding band with embossed ring */}
      <mesh position={[0, 0, 0]} material={materials.blackMetal || materials.metal}>
        <cylinderGeometry args={[1.42, 1.42, 0.28, 32, 1, true]} />
      </mesh>

      {/* Neck Collar */}
      <mesh position={[0, 1.45, 0]} material={materials.metal}>
        <cylinderGeometry args={[0.45, 0.5, 0.3, 24]} />
      </mesh>

      {/* Spray Atomizer Nozzle */}
      <mesh position={[0, 1.75, 0]} material={materials.blackMetal || materials.metal}>
        <cylinderGeometry args={[0.35, 0.35, 0.35, 24]} />
      </mesh>

      {/* Safety Pin Ring (Grenade latch feature) */}
      <mesh position={[0.4, 1.65, 0]} rotation={[0, 0, Math.PI / 4]} material={materials.metal}>
        <torusGeometry args={[0.22, 0.04, 16, 24]} />
      </mesh>
    </group>
  );
}

// Scene Root with gentle turntable rotation
function ModelWrapper({ activeModel, renderMode, autoRotate }) {
  const modelRef = useRef();

  useFrame((_, delta) => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += delta * 0.45;
    }
  });

  return (
    <group ref={modelRef}>
      {activeModel === 'gameboy' && <HandheldConsole renderMode={renderMode} />}
      {activeModel === 'vintageMac' && <VintageMacComputer renderMode={renderMode} />}
      {activeModel === 'fragrance' && <FragranceBottle renderMode={renderMode} />}
    </group>
  );
}

export default function Retro3DCanvas({
  activeModel = 'gameboy',
  setActiveModel,
  onSound,
}) {
  const [renderMode, setRenderMode] = useState('textured'); // 'textured' | 'clay' | 'wireframe'
  const [autoRotate, setAutoRotate] = useState(true);
  const [lighting, setLighting] = useState('studio'); // 'studio' | 'vintageWarm' | 'darkCyber'

  return (
    <div className="relative w-full h-[520px] md:h-[580px] bg-[#141210] rounded-xl overflow-hidden retro-border flex flex-col">
      {/* Top Header / Viewport HUD */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#1c1a17] border-b border-[#2e2a24] text-xs font-retro-mono text-[#a89f91]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[#f3ede2] font-bold tracking-wider">3D REALTIME VIEWPORT</span>
          <span className="text-[#6d665b]">|</span>
          <span className="hidden sm:inline">WebGL 2.0 • 60 FPS</span>
        </div>

        {/* Model Selectors */}
        <div className="flex items-center gap-1.5 bg-[#121110] p-1 rounded border border-[#332e27]">
          <button
            onClick={() => {
              setActiveModel?.('gameboy');
              onSound?.('click');
            }}
            className={`px-2.5 py-1 rounded transition-all ${
              activeModel === 'gameboy'
                ? 'bg-[#c29b62] text-[#121110] font-bold shadow'
                : 'text-[#9c9384] hover:text-[#f3ede2]'
            }`}
          >
            1989 Game Boy
          </button>
          <button
            onClick={() => {
              setActiveModel?.('vintageMac');
              onSound?.('click');
            }}
            className={`px-2.5 py-1 rounded transition-all ${
              activeModel === 'vintageMac'
                ? 'bg-[#c29b62] text-[#121110] font-bold shadow'
                : 'text-[#9c9384] hover:text-[#f3ede2]'
            }`}
          >
            90's Mac PC
          </button>
          <button
            onClick={() => {
              setActiveModel?.('fragrance');
              onSound?.('click');
            }}
            className={`px-2.5 py-1 rounded transition-all ${
              activeModel === 'fragrance'
                ? 'bg-[#c29b62] text-[#121110] font-bold shadow'
                : 'text-[#9c9384] hover:text-[#f3ede2]'
            }`}
          >
            V&R 3D Bottle
          </button>
        </div>
      </div>

      {/* Main 3D Canvas */}
      <div className="relative flex-1 w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas
          shadows
          camera={{ position: [0, 0.5, 6.5], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
        >
          {/* Lighting Presets */}
          {lighting === 'studio' && (
            <>
              <ambientLight intensity={0.65} />
              <directionalLight position={[6, 8, 5]} intensity={1.5} castShadow shadow-mapSize={1024} />
              <directionalLight position={[-6, -2, -4]} intensity={0.5} color="#c2b59b" />
              <pointLight position={[0, 4, 3]} intensity={0.6} />
            </>
          )}

          {lighting === 'vintageWarm' && (
            <>
              <ambientLight intensity={0.4} color="#ffd494" />
              <directionalLight position={[5, 7, 4]} intensity={1.8} color="#fca311" castShadow />
              <pointLight position={[-4, 2, 2]} intensity={0.8} color="#ffedd5" />
            </>
          )}

          {lighting === 'darkCyber' && (
            <>
              <ambientLight intensity={0.2} color="#3b82f6" />
              <directionalLight position={[4, 5, 4]} intensity={1.4} color="#ec4899" />
              <pointLight position={[-4, -2, 2]} intensity={1.5} color="#06b6d4" />
            </>
          )}

          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
            <Center>
              <ModelWrapper
                activeModel={activeModel}
                renderMode={renderMode}
                autoRotate={autoRotate}
              />
            </Center>
          </Float>

          <ContactShadows
            position={[0, -2.1, 0]}
            opacity={0.65}
            scale={8}
            blur={2.4}
            far={4}
            color="#050505"
          />

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3.5}
            maxDistance={11}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>

        {/* Bottom Floating Control Bar */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          {/* Mode Switchers (Textured / Clay / Topology) */}
          <div className="pointer-events-auto flex items-center gap-1 bg-[#181614]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-[#38332b] text-[11px] font-retro-mono">
            <span className="text-[#888] mr-1 hidden sm:inline">VIEW:</span>
            <button
              onClick={() => {
                setRenderMode('textured');
                onSound?.('click');
              }}
              className={`px-2 py-1 rounded transition-colors ${
                renderMode === 'textured'
                  ? 'bg-[#c29b62] text-[#121110] font-bold'
                  : 'text-[#d6cebf] hover:bg-[#2b2721]'
              }`}
            >
              Textured
            </button>
            <button
              onClick={() => {
                setRenderMode('clay');
                onSound?.('click');
              }}
              className={`px-2 py-1 rounded transition-colors ${
                renderMode === 'clay'
                  ? 'bg-[#c29b62] text-[#121110] font-bold'
                  : 'text-[#d6cebf] hover:bg-[#2b2721]'
              }`}
            >
              Clay Render
            </button>
            <button
              onClick={() => {
                setRenderMode('wireframe');
                onSound?.('click');
              }}
              className={`px-2 py-1 rounded transition-colors ${
                renderMode === 'wireframe'
                  ? 'bg-[#c29b62] text-[#121110] font-bold'
                  : 'text-[#d6cebf] hover:bg-[#2b2721]'
              }`}
            >
              Wireframe
            </button>
          </div>

          {/* Quick Turntable Toggles */}
          <div className="pointer-events-auto flex items-center gap-1.5 bg-[#181614]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-[#38332b] text-[11px] font-retro-mono">
            <button
              onClick={() => {
                setAutoRotate(!autoRotate);
                onSound?.('beep');
              }}
              className={`px-2.5 py-1 rounded border transition-colors ${
                autoRotate
                  ? 'border-emerald-500/50 text-emerald-400 bg-emerald-950/30'
                  : 'border-[#443e34] text-[#999]'
              }`}
            >
              {autoRotate ? '⟳ Auto-Spin: ON' : '⏸ Spin: OFF'}
            </button>

            <select
              value={lighting}
              onChange={(e) => {
                setLighting(e.target.value);
                onSound?.('click');
              }}
              className="bg-[#121110] text-[#ded6c9] border border-[#3a352c] rounded px-2 py-1 text-[11px] outline-none cursor-pointer"
            >
              <option value="studio">Studio Light</option>
              <option value="vintageWarm">90s Warm</option>
              <option value="darkCyber">Neon Dusk</option>
            </select>
          </div>
        </div>
      </div>

      {/* Interactive Helper Overlay hint */}
      <div className="px-4 py-2 bg-[#171513] border-t border-[#2a2620] flex items-center justify-between text-[11px] font-retro-mono text-[#847b6f]">
        <span>🖱 Drag to rotate 3D mesh • Scroll to zoom</span>
        <span className="text-[#c29b62]">3D Asset Pipeline Ready</span>
      </div>
    </div>
  );
}
