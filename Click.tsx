import { useState } from 'react';

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <div><MyButton count={count} onClick={handleClick} /></div>
            <div><MyButton count={count} onClick={handleClick} /></div>
        </div>
    );
}

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}