import React from 'react';

function Hs1(props) {
    return (
        <div>
            <p>{props.myname}</p>
            <p>{props.myage}</p>
            <ul>{props.hobby && props.hobby.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
    );
}

export default Hs1;
