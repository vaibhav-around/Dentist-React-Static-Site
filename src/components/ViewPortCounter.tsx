import {useEffect, useState, useRef } from "react";


type Props = {
    target: number,
    duration?: number
}



const ViewPortCounter: React.FC<Props> = ( {
    target, duration= 1000
}) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const node = ref.current;
        if(!node) return;
 
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setHasStarted(true);
                // Stop observing once the animation has started
                observer.unobserve(node);
            }
        }, {
            threshold: 0.5
        });
 
        observer.observe(node);
 
        return () => observer.disconnect()
    }, []); // Run this effect only once
 
    useEffect(() => {
        if (!hasStarted) return;
 
        let animationFrameId: number;
        let startTimestamp: number | null = null;
 
        const animate = (timestamp: number) => {
            if (!startTimestamp) {
                startTimestamp = timestamp;
            }
 
            const elapsedTime = timestamp - startTimestamp;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = target * progress;
 
            if (progress >= 1) {
                setCount(target);
                return;
            }
 
            // Handle integers vs. floats for smoother display
            if (target % 1 === 0) {
                setCount(Math.floor(currentValue));
            } else {
                setCount(Number(currentValue.toFixed(1)));
            }
 
            animationFrameId = requestAnimationFrame(animate);
        };
 
        animationFrameId = requestAnimationFrame(animate);
 
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [hasStarted, target, duration]);
 
    return ( 
        <div ref={ref} className="text-2xl font-bold text-blue-600">
            <p>{count}</p>
        </div>
    )
}


export default ViewPortCounter;