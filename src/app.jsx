import { useState } from 'react';
import './app.css';

export default function App() {
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [value, setValue] = useState('');

    const SECOND = 1;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    
    const handleClick = () => {
        setMin(Math.floor(value / MINUTE) % 60)
        setHour(Math.floor(value / HOUR) % 60)
        setSec(Math.floor(value / SECOND) % 60)
    }
    const handleChange = ({target: {value}}) => {
        setValue(value)
        console.log(value)
    }


    return (
        <div>
            <input placeholder='Seconds' className='timer__input' type='number' value={value} onChange={handleChange} />
            <button className='timer__button' onClick={handleClick} >Start</button>
            <div className='timer'>
            <span className='hours'>{hour.toString().padStart(2, '0')}:</span>
            <span className='minute'>{min.toString().padStart(2, '0')}:</span>
            <span className='second'>{sec.toString().padStart(2, '0')}</span>
            </div>
        </div>
    )
}