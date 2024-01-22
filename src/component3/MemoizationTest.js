import React, { useState } from 'react';
import { useMemo } from 'react';
const MemoTest = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, 'New Todo']);
    };
    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    }; //1.렌더링할때마다 오래걸리는 작업이 수행된다..... //const calculation = expensiveCalculation(count); //2.count가 변경시에만 수행한다.
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    return (
        <div>
            <div>
                <hr /> <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button className="btn btn-danger" onClick={addTodo}>
                    Add Todo
                </button>
            </div>

            <div>
                Count: {count}
                <button className="btn btn-success" onClick={increment}>
                    +
                </button>
                <h2>Expensive Calculation: {calculation}</h2>
            </div>
        </div>
    );
};
export default MemoTest;
