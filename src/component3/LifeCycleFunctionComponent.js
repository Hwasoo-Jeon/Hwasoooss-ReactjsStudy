import React, { useEffect, useRef, useState } from 'react';
import { Form, InputGroup, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTimer from './MyTimer';

function LifeCycleFunctionComponent(props) {
    const [member, setMember] = useState({ username: '', phone: '', id: '' });
    const [memberlist, setMemberList] = useState([]);
    var nexId = useRef(1);
    const nameInput = useRef();
    const phoneInput = useRef();
    const changeHandeler = (e) => {
        let tar = e.target.name;
        setMember({ ...member, [tar]: e.target.value });
    };
    const add = () => {
        if (member.username === '' || member.phone === '') {
            return;
        }
        if (memberlist.find((item) => item.username === member.username)) {
            return;
        }
        if (memberlist.find((item) => item.phone === member.phone)) {
            return;
        }
        const new_mem = { ...member, mid: nexId.current };
        setMemberList([...memberlist, new_mem]);
        nexId.current++;
    };

    useEffect(() => {
        return () => {
            console.log('clean up');
        };
    }, [memberlist]);
    return (
        <div>
            <h1>LifeCycleFunctionComponent</h1>
            <h1>타이머</h1>
            <MyTimer></MyTimer>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">seq</InputGroup.Text>
                <Form.Control
                    name="seq"
                    onChange={changeHandeler}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    ref={nameInput}
                    disabled
                />
            </InputGroup>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">이름</InputGroup.Text>
                <Form.Control
                    name="username"
                    onChange={changeHandeler}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    ref={nameInput}
                />
            </InputGroup>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">전화번호</InputGroup.Text>
                <Form.Control
                    name="phone"
                    onChange={changeHandeler}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    ref={phoneInput}
                />
            </InputGroup>
            <button onClick={add}>등록</button>
            <button onClick={() => nameInput.current.focus()}>이름으로 이동</button>
            <button onClick={() => phoneInput.current.focus()}>번호로 이동</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>seq</th>
                        <th>이름</th>
                        <th>전화번호</th>
                    </tr>
                </thead>
                <tbody>
                    {memberlist.map((po, index) => (
                        <TrComponent key={index} item={po}></TrComponent>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

function TrComponent(props) {
    const { item } = props;
    return (
        <tr>
            <TdComponent data={item.mid}></TdComponent>
            <TdComponent data={item.username}></TdComponent>
            <TdComponent data={item.phone}></TdComponent>
        </tr>
    );
}

function TdComponent(props) {
    return <td>{props.data}</td>;
}

export default LifeCycleFunctionComponent;
