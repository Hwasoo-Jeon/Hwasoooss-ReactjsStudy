import React, { createContext, useContext, useState } from 'react';

export const CounterContext = createContext();

export const CountProvider = (props) => {
    const [count, setCount] = useState(0);
    const addHandler = () => setCount(count + 1);
    const minusHandler = () => setCount(count - 1);
    const [username, setUsername] = useState('ggg');
    const [mystyle, setMystyle] = useState({ border: '3px solidd green', color: 'red' });
    return (
        <CounterContext.Provider
            value={{
                count,
                addHandler,
                minusHandler: minusHandler,
                username: username,
                mystyle: mystyle,
                setUsername,
            }}
        >
            {props.children}
        </CounterContext.Provider>
    );
};

function CunterContentManager(props) {
    return (
        <CountProvider>
            <CountLabel></CountLabel>
            <PlusButton></PlusButton>
            <NameChange></NameChange>
        </CountProvider>
    );
}

export function CountLabel() {
    const { username } = useContext(CounterContext);
    return (
        <div>
            <h1>countlabel 커뮤ㅗㅓㄴ트</h1>
            <p>{username}</p>
        </div>
    );
}

export function PlusButton() {
    const { addHandler } = useContext(CounterContext);
    return (
        <div>
            <h1>PlusButton 커뮤ㅗㅓㄴ트</h1>
            <button onClick={addHandler}></button>
        </div>
    );
}

export function NameChange() {
    const { setUsername } = useContext(CounterContext);
    return (
        <div>
            <h1>NameChange 커뮤ㅗㅓㄴ트</h1>
            <input onChange={setUsername}></input>
        </div>
    );
}

export default CunterContentManager;
