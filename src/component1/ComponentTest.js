import React from 'react';
import Header, { Header2 } from 'component1/Header';
import Content, { MyFunc } from 'component1/Content';
import Menu, { score } from 'component1/Menu';

function ComponentTest(props) {
    console.log(score);
    return (
        <div>
            <Header></Header>
            <Content></Content>
            <Menu></Menu>
            <Header2></Header2>
            <MyFunc></MyFunc>
        </div>
    );
}

export default ComponentTest;
