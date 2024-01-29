import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BoardDelete(props) {
    const navi = useNavigate();
    const location = useLocation();
    const bno = location.state.bno;
    axios({
        url: `/rest/webboard/delete/${bno}`,
        method: 'delete',
    })
        .then((res) => {
            console.log(res.data);
            navi('/board/list');
        })
        .catch();
    return <div></div>;
}

export default BoardDelete;
