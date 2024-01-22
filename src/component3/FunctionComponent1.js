import React, { useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';

function FunctionComponent1(props) {
    const [color, setColor] = useState('red');
    const [message, setMessage] = useState('state 관리 연습');
    const [mystyle, setStyle] = useState({
        color: 'blue',
        border: '4px dotted green',
    });

    const handleClick = (arg) => {
        let colorse = arg.target.innerHTML;
        setColor(colorse);
        setStyle({ color: colorse, border: `1px solid ${colorse}` });
    };
    return (
        <div>
            <button onClick={handleClick}>red</button>
            <button onClick={handleClick}>green</button>
            <button onClick={handleClick}>blue</button>
            <h1 style={mystyle}>{message}</h1>
        </div>
    );
}

function FunctionComponent2() {
    const [member, setMember] = useState({ name: '', age: 0 });
    const memChanged = (ev) => {
        let tar = ev.target.name;
        setMember({
            ...member,
            [tar]: ev.target.value,
        });
    };
    const nameChanged = (ev) => {
        setMember({
            ...member,
            name: ev.target.value,
        });
    };
    const ageChanged = (ev) => {
        setMember({
            ...member,
            age: ev.target.value,
        });
    };
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
                <Form.Control
                    onChange={memChanged}
                    placeholder="이름 입력해라"
                    aria-label="name"
                    aria-describedby="basic-addon1"
                    name="name"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">나이</InputGroup.Text>
                <Form.Control
                    onChange={memChanged}
                    placeholder="나이 입력해라"
                    aria-label="age"
                    aria-describedby="basic-addon1"
                    name="age"
                />
            </InputGroup>
            <h1>이름 {member.name}</h1>
            <h1>나이 {member.age}</h1>
        </div>
    );
}

function FunctionComponent3() {
    // const [userName, setUserName] = useState('진짱');
    // const [sendMessage, setSendMessage] = useState('빨리와');

    // const nameChangeHandler = (e) => {
    //     setUserName(e.target.value);
    // };
    // function messageChangeHandler(e) {
    //     setSendMessage(e.target.value);
    // }
    const [memo, setMemo] = useState({
        userName: '서보현',
        sendMessage: '찾는다',
    });

    const clearListener = () => {
        setMemo({ userName: '', sendMessage: '' });
    };

    const inputChange = (e) => {
        const target = e.target.name;
        setMemo({ ...memo, [target]: e.target.value });
    };
    const [memoList, setList] = useState([memo]);
    const add = () => {
        setList([...memoList, memo]);
    };
    return (
        <div>
            <h2>이름은 {memo.userName}</h2>
            <h2>메시지는 {memo.sendMessage}</h2>
            <input type="text" placeholder="이름입력" onChange={inputChange} value={memo.userName} name="userName" />
            <input
                type="text"
                placeholder="message입력"
                onChange={inputChange}
                name="sendMessage"
                value={memo.sendMessage}
            ></input>
            <button onClick={add}>메시지담기</button>
            <button onClick={clearListener}>지우기</button>

            <hr></hr>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {memoList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.userName}</td>
                            <td>{item.sendMessage}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export { FunctionComponent1 as default, FunctionComponent2, FunctionComponent3 };
