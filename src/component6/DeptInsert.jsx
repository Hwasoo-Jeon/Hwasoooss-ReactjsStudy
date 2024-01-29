import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DeptInsert(props) {
    const [dept, setDept] = useState({});
    const navi = useNavigate();
    const changeHandler = useCallback(
        (e) => {
            var target = e.target.name;
            setDept({ ...dept, [target]: e.target.value });
        },
        [dept]
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            url: '/rest/deptemp/insert',
            method: 'post',
            data: dept,
        })
            .then((res) => {
                console.log(res.data === 1 ? 'success' : 'fail');
                navi('/deptemp/dept/list');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="departmentId">
                <Form.Label column sm="2">
                    departmentId
                </Form.Label>
                <Col sm="10">
                    <Form.Control defaultValue="" name="departmentId" onChange={changeHandler} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="departmentName">
                <Form.Label column sm="2">
                    departmentName
                </Form.Label>
                <Col sm="10">
                    <Form.Control defaultValue="" name="departmentName" onChange={changeHandler} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="managerId">
                <Form.Label column sm="2">
                    managerId
                </Form.Label>
                <Col sm="10">
                    <Form.Control defaultValue="" name="managerId" onChange={changeHandler} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="locationId">
                <Form.Label column sm="2">
                    locationId
                </Form.Label>
                <Col sm="10">
                    <Form.Control defaultValue="" name="locationId" onChange={changeHandler} />
                </Col>
            </Form.Group>
            <input type="submit" variant="danger" value="등록" />{' '}
        </Form>
    );
}

export default DeptInsert;
