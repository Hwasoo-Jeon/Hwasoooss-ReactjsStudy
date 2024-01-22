import React, { useState } from 'react';

function StateFunctionComponent(props) {
    const [count, setCount] = useState(0);
    const [message, setInfo] = useState('버튼을 누르면 값이 변경.... 호호');

    const f1 = () => {};
    const btnClick = (event) => {
        let target = event.target.innerHTML;
        if (target === '+') {
            setCount(count + 1);
            setInfo('더하기');
        } else if (target === '-') {
            setCount(count - 1);
            setInfo('빼기');
        }
    };
    return (
        <div>
            <h1>StateFunctionComponent 연습</h1>
            <p>
                현재 값 : {count} || {message}
            </p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={btnClick}>+</button>
            <button onClick={btnClick}>-</button>
        </div>
    );
}

export default StateFunctionComponent;
