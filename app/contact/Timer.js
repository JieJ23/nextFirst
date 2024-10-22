"use client"
import { useState, useEffect } from 'react';

export default function Timer({ data }) {
    const targetTime = new Date(data); // Your target date
    const [elapsedTime, setElapsedTime] = useState("");

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const difference = now - targetTime;

            // Calculate the time parts (in milliseconds)
            const seconds = Math.floor((difference / 1000) % 60);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const hours = Math.floor((difference / (1000 * 60 * 60)));

            setElapsedTime(`${hours}h ${minutes}m ${seconds}s`);
        };

        const intervalId = setInterval(updateTimer, 1000);

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className='font-serif text-[12px] text-end'>
            {`(${elapsedTime})`}
        </div>
    );
};
