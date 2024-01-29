import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DeptDelete(props) {
    const navi = useNavigate();
    const location = useLocation();
    const deptid = location.state.deptid;
    axios({
        url: `/rest/deptemp/dept/delete/${deptid}`,
        method: 'delete',
    })
        .then((res) => {
            console.log(res.data === 1 ? 'success' : 'fail');
            navi('/deptemp/dept/list');
        })
        .catch();
    return <div></div>;
}

export default DeptDelete;
