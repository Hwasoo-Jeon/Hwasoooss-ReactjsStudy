import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FieldComponent, { FieldComponentReadOnly } from './FiledComponent';

function BoardDetail(props) {
    const { bno } = useParams();
    const [board, setBoard] = useState({});
    const navi = useNavigate();
    const changeHandler = useCallback(
        (e) => {
            var target = e.target.name;
            setBoard({ ...board, [target]: e.target.value });
        },
        [board]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            url: '/rest/webboard/update',
            method: 'put',
            data: board,
        })
            .then((res) => {
                console.log(res.data === 1 ? 'success' : 'fail');
                navi('/board/list');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        axios({
            url: `/rest/webboard/detail/${bno}`,
            method: 'get',
        })
            .then((res) => {
                setBoard(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [bno]);
    return (
        <div>
            <BoardDetailDisplay board={board} changeHandler={changeHandler} handleSubmit={handleSubmit}>
                <h1>Board Detail : {bno}</h1>
            </BoardDetailDisplay>
        </div>
    );
}

function BoardDetailDisplay({ board, children, changeHandler, handleSubmit }) {
    return (
        <div>
            {children}
            {board && (
                <Form onSubmit={handleSubmit}>
                    <FieldComponentReadOnly colname="bno" data={board.bno} changeHandler={changeHandler}>
                        번호
                    </FieldComponentReadOnly>
                    <FieldComponent colname="title" data={board.title} changeHandler={changeHandler}>
                        제목
                    </FieldComponent>
                    <FieldComponent colname="writer" data={board.writer} changeHandler={changeHandler}>
                        작성자
                    </FieldComponent>
                    <FieldComponent colname="content" data={board.content} changeHandler={changeHandler}>
                        내용
                    </FieldComponent>
                    <FieldComponentReadOnly colname="regdate" data={board.regdate}>
                        등록일
                    </FieldComponentReadOnly>
                    <FieldComponentReadOnly colname="updatedate" data={board.updatedate}>
                        수정일
                    </FieldComponentReadOnly>
                    <input type="submit" value="수정" />
                    <Link to="/board/delete/" state={{ bno: board.bno }}>
                        <Button variant="danger">삭제</Button>{' '}
                    </Link>
                </Form>
            )}
        </div>
    );
}

export default BoardDetail;
