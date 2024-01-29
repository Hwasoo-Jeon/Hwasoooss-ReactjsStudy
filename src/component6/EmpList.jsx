import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EmpList(props) {
    const [empList, setEmptList] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: '/rest/deptemp/emplist',
        })
            .then((res) => {
                console.log(res.data);
                setEmptList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <EmpDisplay empList={empList}></EmpDisplay>
        </div>
    );
}

function EmpDisplay({ empList }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>employeeId</th>
                    <th>firstName</th>
                    <th>managerId</th>
                    <th>lastName</th>
                </tr>
            </thead>
            <tbody>
                {empList &&
                    empList.map((item, index) => (
                        <tr key={`id${index}`}>
                            <td>
                                <Link to={`/board/detail/${item.bno}`}>{item.employeeId}</Link>
                            </td>
                            <td>{item.firstName}</td>
                            <td>{item.managerId}</td>
                            <td>{item.lastName}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
}

export default EmpList;
