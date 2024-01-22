import React from 'react';
import 'component2/My.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, Stack } from 'react-bootstrap';

function CSSTest(props) {
    const inlineStyle = {
        border: '3px dotted blue',
        color: 'orange',
        fontSize: '30px',
    };

    return (
        <header style={{ border: '1px solid gray' }}>
            <h1 className="myStyle">반갑습니다....</h1>
            <h2 className="myStyle2">React배우기전 선수지식은?</h2>
            <p style={inlineStyle}>Style연습..inline</p>
            <p style={inlineStyle} className="myStyle2">
                Style연습...class이름
            </p>
            <button className="btn btn-danger">내가 만든 버튼</button>
            <Badge bg="secondary" as={Button}>
                New
            </Badge>
            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
        </header>
    );
}

export default CSSTest;
