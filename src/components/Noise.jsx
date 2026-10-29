import { useRef, useEffect } from 'react';

const Noise = ({
    patternSize = 250,
    patternScaleX = 1,
    patternScaleY = 1,
    patternRefreshInterval = 2,
    patternAlpha = 15
}) => {
    const grainRef = useRef(null);

    useEffect(() => {
        const canvas = grainRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let frame = 0;
        let animationId;
        const canvasSize = 1024;
        // A handful of frames cycled forever looks identical to fresh grain,
        // and keeps the per-frame cost to one putImageData during page animations
        const cacheSize = 6;
        const cache = [];

        const resize = () => {
            if (!canvas) return;
            canvas.width = canvasSize;
            canvas.height = canvasSize;

            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
        };

        const createGrain = () => {
            const imageData = ctx.createImageData(canvasSize, canvasSize);
            // One 32-bit write per pixel (little-endian ABGR) instead of four byte writes
            const pixels = new Uint32Array(imageData.data.buffer);
            const alpha = patternAlpha << 24;

            for (let i = 0; i < pixels.length; i++) {
                const value = (Math.random() * 256) | 0;
                pixels[i] = alpha | (value << 16) | (value << 8) | value;
            }

            return imageData;
        };

        const drawGrain = () => {
            const index = (frame / patternRefreshInterval) % cacheSize;
            if (!cache[index]) cache[index] = createGrain();
            ctx.putImageData(cache[index], 0, 0);
        };

        const loop = () => {
            if (frame % patternRefreshInterval === 0) {
                drawGrain();
            }
            frame++;
            animationId = window.requestAnimationFrame(loop);
        };

        window.addEventListener('resize', resize);
        resize();
        loop();

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationId);
        };
    }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

    return (
        <canvas
            className="pointer-events-none absolute inset-0 w-full h-full"
            ref={grainRef}
            style={{ imageRendering: 'pixelated' }}
        />
    );
};

export default Noise;
