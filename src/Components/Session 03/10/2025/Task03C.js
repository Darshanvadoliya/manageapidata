import React, { useEffect, useState } from 'react'

function Task03C() {
    const [color, setColor] = useState('white')

    useEffect(() => {
        const getRandomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          };
          const interval = setInterval(() => {
            setColor(getRandomColor());
          }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='p-4'>
            <h4>Task 3: (Change Background Color Every 3 Seconds)</h4>
            <div className='p-5 main_box w-25' style={{ backgroundColor: color, border:"1px solid black"}}></div>
        </div>
    )
}
export default Task03C