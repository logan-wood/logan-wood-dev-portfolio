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

    useAnimationFrame(() => 
        setPosition(prevPosition => {
            const newPosition = prevPosition + scroll_speed;

            // if moving right and reached end of page
            if (CANVAS_HEIGHT + height < newPosition) {
                return 0 - height;
            } else if (0 - height > newPosition) {
                return CANVAS_HEIGHT + height;
            } else {
                return newPosition;
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
        zIndex: 0,
        overflow: 'hidden',
    }}></div>
}

export default VerticalBlock;