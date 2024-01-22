import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Form, InputGroup, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTimer from 'component3/MyTimer';

const tetsProvider = createContext();

const Provider = (props) => {
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
        <tetsProvider.Provider value={{ changeHandeler, nameInput, phoneInput, memberlist, add }}>
            {props.children}
        </tetsProvider.Provider>
    );
};
export const ProviderBody = () => {
    return (
        <Provider>
            <ProviderTest></ProviderTest>
        </Provider>
    );
};
function ProviderTest(props) {
    const { changeHandeler, nameInput, phoneInput, add, memberlist } = useContext(tetsProvider);
    return (
        <div>
            <h1>타이머 이용한 프로바이더 테스트</h1>
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
                        <TrComponent key={index} gg={po}></TrComponent>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

function TrComponent(props) {
    const { gg } = props;
    return (
        <tr>
            <TdComponent www={gg.mid}></TdComponent>
            <TdComponent www={gg.username}></TdComponent>
            <TdComponent www={gg.phone}></TdComponent>
        </tr>
    );
}

function TdComponent(props) {
    return <td>{props.www}</td>;
}
