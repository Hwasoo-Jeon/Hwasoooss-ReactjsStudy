import React from 'react';

function Header(props) {
    console.log('여기는 헤더 js 이다...');
    return (
        <div>
            <header>
                <h1>반갑습니다....</h1>
                <h2>React배우기전 선수지식은?</h2>
            </header>
        </div>
    );
}

export function Header2(props) {
    console.log('여기는 헤더222222 js 이다...');
    return (
        <div>
            <header>
                <h1>즐겁다...</h1>
                <h2>React배우기전 선수지식은?</h2>
            </header>
        </div>
    );
}

export default Header;
