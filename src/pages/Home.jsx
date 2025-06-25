import FetchQuote from "../components/FetchQuote";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

export default function Home() {
    return (
        <div>
            <h1 className="text-4xl font-bold">Welcome to my World</h1>
            <p className="mt-2 text-xl">Explore my projects, ideas, and thoughts.</p>

            <div className="h-64 mt-6">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 5]} />
                    <OrbitControls enableZoom={false}/>
                    <Sphere args={[1.2, 32, 32]}>
                        <meshStandardMaterial color="hotpink" wireframe />
                    </Sphere>
                </Canvas>
            </div>

            <FetchQuote />
        </div>
    )
}