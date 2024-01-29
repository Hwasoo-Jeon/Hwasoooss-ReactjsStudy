import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';
import BoardInsert from './BoardInsert';
import BoardDetail from './BoarderDetail';
import { Button } from 'react-bootstrap';
import BoardDelete from './BoardDelete';

function BoardHome(props) {
    return (
        <div>
            <h1>Board 작업들</h1>

            <Link to="list">
                <Button type="button" variant="outline-warning">
                    조회
                </Button>
            </Link>
            {'   '}
            <Link to="insert">
                <Button type="button" variant="outline-warning">
                    입력
                </Button>
            </Link>
            {'   '}
            <Routes>
                <Route path="/list" element={<BoardList />}></Route>
                <Route path="/insert" element={<BoardInsert />}></Route>
                <Route path="/detail/:bno" element={<BoardDetail />}></Route>
                <Route path="/delete" element={<BoardDelete />}></Route>
            </Routes>
        </div>
    );
}

export default BoardHome;
