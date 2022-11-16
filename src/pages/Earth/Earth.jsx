import { useRef } from 'react'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import EarthCloudsMap from '../../../public/mesh/8k_earth_clouds.jpg'
import EarthNightMap from '../../../public/mesh/8k_earth_nightmap.jpg'
import EarthDayMap from '../../../public/mesh/8k_earth_daymap.jpg'
import EarthNormalMap from '../../../public/mesh/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../../../public/mesh/8k_earth_specular_map.jpg'

export default function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap, nightMap] = useLoader(
    TextureLoader,
    [
      EarthDayMap,
      EarthNormalMap,
      EarthSpecularMap,
      EarthCloudsMap,
      EarthNightMap,
    ]
  )

  const earthRef = useRef()
  const cloudsRef = useRef()

    useFrame(({clock}) => {
      const elapsedTime = clock.getElapsedTime()
      earthRef.current.rotation.y = elapsedTime / 12
      cloudsRef.current.rotation.y = elapsedTime / 10
    })

  return (
    <>
      <pointLight color='#F6F3EA' position={[2, 0, 5]} intensity={1.2} />
      <Stars
        radius={400}
        depth={60}
        count={10000}
        factor={8}
        depthWrite={true}
        transparent={true}
        side={THREE.DoubleSide}
      />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.008, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          color={'rgba(135, 206, 235, 0.26)'}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry argus={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughtness={0.7}
        />
      </mesh>
    </>
  )
}
