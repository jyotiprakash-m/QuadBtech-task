import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer() {
    const [value, setValue] = useState(60)

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => prev - 1)
        }, 1000);
        return () => clearInterval(interval)

    }, [value])
    if (value == 0) {
        setValue(60)
    }
    return (
        <div style={{ width: 30, height: 30 }}>
            <CircularProgressbar minValue={1} maxValue={60} value={value} text={`${value}`} />;
        </div>
    )
}

export default Timer
