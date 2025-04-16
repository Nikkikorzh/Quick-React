import { useState } from 'react';

export default function MyApp() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <div><MyButton /></div>
            <div><MyButton /></div>
        </div>
    );
}

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}