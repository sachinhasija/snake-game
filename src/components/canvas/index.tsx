import React, { useEffect, useCallback, useRef, useState, } from 'react';
import { Box } from '@chakra-ui/layout'

interface Props {
    height: number
    width: number
}

interface SnakePosition {
    x: number,
    y: number
}

export default function CanvasComponent(props: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [screenInfo, setScreenInfo] = useState<null | { boxes: number, boxSize: number, snakeSize: number }>(null);
    const [snakePosition, setSnakePosition] = useState<SnakePosition>({ x: 10, y: 10 });

    const clearScreen = useCallback((ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvasRef.current?.width || 800, canvasRef.current?.height || 800);
    }, []);

    const createSnake = useCallback((ctx: CanvasRenderingContext2D) => {
        if (screenInfo) {
            const boxCount = screenInfo.boxes;
            const boxSize = screenInfo.boxSize;
            const snakeSize = screenInfo.snakeSize;

            console.log("boxCount", boxCount, " snakePosition ", snakePosition, boxSize);
            ctx.fillStyle = '#A0AEC0';
            ctx.fillRect(snakePosition.x * boxCount, snakePosition.y * boxCount, snakeSize, snakeSize);
        }
    }, [snakePosition, screenInfo]);

    useEffect(() => {
        const draw = (ctx: CanvasRenderingContext2D) => {
            clearScreen(ctx);
            createSnake(ctx);
        }
        const canvas = canvasRef.current
        if (canvas) {
            const context: CanvasRenderingContext2D | null = canvas.getContext('2d')
            if (!screenInfo) {
                const boxSize = (canvas.width / 20);
                setScreenInfo({ boxes: boxSize, boxSize: boxSize, snakeSize: boxSize - (boxSize / 10) })
            }

            if (context && screenInfo) {
                draw(context);
            }
        }

    }, [screenInfo, createSnake, clearScreen]);

    return <Box sx={{ 'canvas': { bg: 'gray.50', color: 'gray.700', boxShadow: 'dark-lg' } }}><canvas ref={canvasRef} {...props} /></Box>;
}
