import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DeptList from './DeptList';
import EmpList from './EmpList';
import DeptDetail from './DeptDetail';
import DeptDelete from './DeptDelete';
import DeptInsert from './DeptInsert';

function DeptEmpHome(props) {
    return (
        <div>
            <h1>DeptEmp 페이지</h1>
            <h1>
                <Link to="dept/list" element={<DeptList />}>
                    DeptList
                </Link>
            </h1>
            <h1>
                <Link to="emp/list" element={<EmpList />}>
                    EmpList
                </Link>
            </h1>
            <Routes>
                <Route path="/dept/list" element={<DeptList />}></Route>
                <Route path="/emp/list" element={<EmpList />}></Route>
                <Route path="/dept/detail/:deptid" element={<DeptDetail />}></Route>
                <Route path="/dept/delete" element={<DeptDelete />}></Route>
                <Route path="/insert" element={<DeptInsert />}></Route>
            </Routes>
        </div>
    );
}

export default DeptEmpHome;
