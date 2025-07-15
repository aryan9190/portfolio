import { useEffect, useRef } from 'react';

export default function ParallaxBackground() {
    const layer1 = useRef();
    const layer2 = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (layer1.current) layer1.current.style.transform = `translateY(${y * 0.2})`;
            if (layer2.current) layer2.current,style.transform = `translateY(${y * 0.5})`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
            <img ref={layer1} src="images/island.png" alt="island" className="absolute bottom-0 left-1/4 w-1/2 opacity-20" />
            <img ref={layer2} src="images/ship.png" alt="ship" className="absolute bottom-10 right-1/3 w-1/3 opacity-30 animate slow-sway" />
        </div>
    );
}
