import React, { useEffect, useRef } from 'react';
import './index.css'

const CanvasTriangle = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'pink';
        ctx.strokeStyle = 'red';

        ctx.beginPath();
        ctx.moveTo(180, 20);
        ctx.lineTo(180, 100);
        ctx.lineTo(0, 100);
        ctx.lineTo(180, 20);

        ctx.fill();
        ctx.stroke();
    }, []);

    return (
        <div>
            <h1>HTML5 Canvas - Draw a triangle</h1>
            <canvas id="myCanvas" width="1000vw" height="125" ref={canvasRef} className='canvas-class'>
               
            </canvas>
        </div>
    );
};

export default CanvasTriangle;
