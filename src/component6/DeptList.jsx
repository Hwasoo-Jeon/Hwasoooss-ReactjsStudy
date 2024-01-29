import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DeptList(props) {
    const [deptList, setDeptList] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: '/rest/deptemp/deptlist',
        })
            .then((res) => {
                console.log(res.data);
                setDeptList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <Link to="/deptemp/insert">
                <Button type="button" variant="outline-warning">
                    입력
                </Button>
            </Link>
            <DeptDisplay deptList={deptList}></DeptDisplay>
        </div>
    );
}

function DeptDisplay({ deptList }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>departmentId</th>
                    <th>departmentName</th>
                    <th>managerId</th>
                    <th>locationId</th>
                </tr>
            </thead>
            <tbody>
                {deptList &&
                    deptList.map((item, index) => (
                        <tr key={`id${index}`}>
                            <td>
                                <Link to={`/deptemp/dept/detail/${item.departmentId}`}>{item.departmentId}</Link>
                            </td>
                            <td>{item.departmentName}</td>
                            <td>{item.managerId}</td>
                            <td>{item.locationId}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
}

export default DeptList;
