import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const CANVAS_HEIGHT = window.innerHeight;

const useAnimationFrame = callback => {
    const requestRef = useRef();
  
    const animate = () => {
      callback();
      requestRef.current = requestAnimationFrame(animate);
    };
  
    useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  };

function VerticalBlock({x, y, width, height, color, scroll_speed}) {
    const [position, setPosition] = useState(y);

    useEffect(() => {
        console.log('initial y: ' + y)
        console.log('intial position: ' + position)
    }, [])

    useAnimationFrame(() => 
        setPosition(prevPosition => {
            const newPosition = prevPosition + scroll_speed;

            console.log({ canvas: CANVAS_HEIGHT, position: newPosition })
            
            if (CANVAS_HEIGHT + height < newPosition) {
                return 0 - height;
            } else {
                return newPosition
            }
        })
    )


    return <div style={{ 
        left: x,
        transform: `translateY(${position}px)`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        position: 'absolute',
        zIndex: 0
    }}></div>
}

export default VerticalBlock;