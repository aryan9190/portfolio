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
        </div>
    );
}
