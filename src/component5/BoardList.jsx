import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//라이프사이클 관리 : 최초 렌더링 시에만 데이터 취급
function BoardList(props) {
    const [boardList, setBoardList] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: '/rest/webboard/list',
        })
            .then((res) => {
                console.log(res.data);
                setBoardList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>조회</h1>
            <BoardDisplay boardList={boardList}></BoardDisplay>
        </div>
    );
}

function BoardDisplay({ boardList }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>bno</th>
                    <th>title</th>
                    <th>writer</th>
                    <th>content</th>
                    <th>regdate</th>
                    <th>updatedate</th>
                </tr>
            </thead>
            <tbody>
                {boardList &&
                    boardList.map((item, index) => (
                        <tr key={`id${index}`}>
                            <td>
                                <Link to={`/board/detail/${item.bno}`}>{item.bno}</Link>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.writer}</td>
                            <td>{item.content}</td>
                            <td>{item.regdate}</td>
                            <td>{item.updatedate}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
}

export default BoardList;
