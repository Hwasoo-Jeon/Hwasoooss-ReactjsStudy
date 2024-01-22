import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

function PropsAndContext(props) {
    const [count, setCount] = useState(0);
    const inlinestyle = {
        border: '1px solid red',
        color: 'red',
    };

    return (
        <Context.Provider value={{ count, setCount }}>
            <div style={inlinestyle}>{props.children}</div>
        </Context.Provider>
    );
}

export function OutBody() {
    return (
        <PropsAndContext>
            <Left1></Left1>
            <Right1></Right1>
        </PropsAndContext>
    );
}

function Right1() {
    return (
        <div>
            <h1>Right1</h1>
            <Right2></Right2>
        </div>
    );
}
function Right2() {
    return (
        <div>
            <h1>Right2</h1>
            <Right3></Right3>
        </div>
    );
}
function Right3() {
    const { count, setCount } = useContext(Context);
    return (
        <div>
            <h1>Right3</h1>
            <button onClick={() => setCount(count + 1)}>증가가각가가각가가각가가가가가가가가가가가각</button>
        </div>
    );
}
function Left1() {
    return (
        <div>
            <h1>Left1</h1>
            <Left2></Left2>
        </div>
    );
}

function Left2() {
    return (
        <div>
            <h1>Left2</h1>
            <Left3></Left3>
        </div>
    );
}

function Left3() {
    const { count } = useContext(Context);
    return (
        <div>
            <h1>Left3</h1>
            <p>{count}</p>
        </div>
    );
}

export default PropsAndContext;
