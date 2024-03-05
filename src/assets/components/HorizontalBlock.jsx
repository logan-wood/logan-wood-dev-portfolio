import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const CANVAS_WIDTH = window.innerWidth;

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

function HorizontalBlock({x, y, width, height, color, scroll_speed}) {
    const [position, setPosition] = useState(x);

    useAnimationFrame(() => 
        setPosition(prevPosition => {
            const newPosition = prevPosition + scroll_speed;
            
            if (CANVAS_WIDTH + width < newPosition) {
                //reset
                return 0 - width;
            } else {
                return newPosition
            }
        })
    )


    return <div style={{ 
        top: y,
        transform: `translate(${position}px, ${y}px)`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        position: 'absolute',
        zIndex: 0
    }}></div>
}

export default HorizontalBlock;