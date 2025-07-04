import {useEffect, useRef} from 'react';

export default function Particles(){
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = Array.from({length:80}, () => ({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            radius: Math.random()*2+1,
            dx:(Math.random()-0.5)*0.5,
            dy:(Math.random()-0.5)*0.5
        }));

        function animate() {
            ctx.clearRect(0,0,canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
                ctx.fillStyle = 'rgba(250, 204, 21, 0.2)';
                ctx.fill();

                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            requestAnimationFrame(animate);
        }
        animate();
    }, []);

    return(
        <canvas ref={canvasRef} className="fixed inset-0 -z-20 w-full h-full pointer-events-none" />
    );
}
