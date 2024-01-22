import React, { useReducer, useState } from 'react';

//직접 상태관리 : useState
//분리된 상태관리 : useReducer

function reducer(state, action) {
    switch (action.type) {
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }
}

function Counter1(props) {
    const [su1, dispatch] = useReducer(reducer, 0);
    const plusHandler = () => dispatch({ type: 'PLUS' });
    const minusHandler = () => dispatch({ type: 'MINUS' });
    return (
        <div>
            <h1>useReducer 이용하기</h1>
            <p>현재값 : {su1}</p>
            <button onClick={plusHandler}>증가</button>
            <button onClick={minusHandler}>감소</button>
        </div>
    );
}

function Counter2(props) {
    const [su, setSu] = useState(0);
    const plusHandler = () => {
        setSu(su + 1);
    };

    const minusHandler = () => {
        setSu(su - 1);
    };
    return (
        <div>
            <h1>useState 이용하기</h1>
            <p>현재값 : {su}</p>
            <button onClick={plusHandler}>증가</button>
            <button onClick={minusHandler}>감소</button>
        </div>
    );
}

export default Counter1;
