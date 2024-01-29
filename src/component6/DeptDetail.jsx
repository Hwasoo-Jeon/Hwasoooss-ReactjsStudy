import axios from 'axios';
import FieldComponent, { FieldComponentReadOnly } from 'component5/FiledComponent';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

function DeptDetail(props) {
    const [dept, setDept] = useState({});
    const { deptid } = useParams();
    const navi = useNavigate();
    useEffect(() => {
        axios({
            url: `/rest/deptemp/deptdetail/${deptid}`,
            method: 'get',
        })
            .then((res) => {
                console.log('ggg' + res.data);
                setDept(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [deptid]);
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
            url: '/rest/deptemp/dept/update',
            method: 'put',
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
            <FieldComponentReadOnly colname="departmentId" data={dept.departmentId} changeHandler={changeHandler}>
                번호
            </FieldComponentReadOnly>
            <FieldComponent colname="departmentName" data={dept.departmentName} changeHandler={changeHandler}>
                부서명
            </FieldComponent>
            <FieldComponent colname="managerId" data={dept.managerId} changeHandler={changeHandler}>
                매니저명
            </FieldComponent>
            <FieldComponent colname="locationId" data={dept.locationId} changeHandler={changeHandler}>
                부서명
            </FieldComponent>
            <input type="submit" value="수정" />
            <Link to="/deptemp/dept/delete" state={{ deptid: dept.departmentId }}>
                <Button variant="danger">삭제</Button>{' '}
            </Link>
        </Form>
    );
}

export default DeptDetail;
