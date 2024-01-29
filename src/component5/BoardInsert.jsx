import axios from 'axios';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BoardInsert(props) {
    const [board, setBoard] = useState({});
    const navi = useNavigate();
    const changeHandler = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    };
    const insertHandler = () => {
        axios({
            method: 'post',
            url: '/rest/webboard/insert',
            data: board,
        })
            .then((res) => {
                console.log(res.data);
                console.log(res.data === 1 ? '입력 성공' : '입력 실패');
                navi('/board/list');
            })
            .catch(() => {});
    };
    return (
        <div>
            <h2>Board 입력</h2>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="title">
                    <Form.Label column sm="2">
                        제목
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control defaultValue="" name="title" onChange={changeHandler} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="content">
                    <Form.Label column sm="2">
                        내용
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control defaultValue="" name="content" onChange={changeHandler} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="writer">
                    <Form.Label column sm="2">
                        작성자
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control defaultValue="" name="writer" onChange={changeHandler} />
                    </Col>
                </Form.Group>
                <input onClick={insertHandler} value="등록" type="button"></input>{' '}
            </Form>
        </div>
    );
}

export default BoardInsert;
