import React from 'react';

function MyComponentA(props) {
    var score = 80;
    var a = null;
    var b = 10 > 3 ? 'tre' : 'sss';
    var c = undefined;
    return (
        <div>
            <h1>JSX 문법 익히기</h1>
            <p>1.Root1개 이여야한다.</p>
            <p>2.{score}</p>
            <p>3.{score > 90 ? '합격' : '불합격'}</p>
            <p>4.{score > 90 && '합격'}</p>
            <p>
                5. {a}, {b},{c}
            </p>
        </div>
    );
}

function MyComponentB(props) {
    const hobbyArr = ['농구', '축구', '볼링', '골프', '공부'];
    const hobbyArr2 = hobbyArr.map((h, idx) => <li key={idx}>{h}</li>);
    console.log(process.env.PUBLIC_URL);
    console.log(process.env.REACT_APP_MYNAME);
    console.log(process.env.REACT_APP_MY_EMAIL);

    function ff(item, idx) {
        return <li key={idx}>{item}</li>;
    }

    const hobbyArr3 = hobbyArr.map(ff);
    return (
        <div>
            <h1>나의취미</h1>
            <ul>
                {hobbyArr.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <hr></hr>
            <h4> map 사용</h4>
            {hobbyArr2}
            <hr></hr>
            <h4> map 함수에 배열 입력 함수 넣기</h4>
            {hobbyArr3}
            <hr></hr>
            <h4>배열가지고 map사용하여 직접 xml return</h4>
            {hobbyArr.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
            <hr></hr>
            {ff('신한ds', 'a100')}
        </div>
    );
}

const varTest = 10;
const VarTest3 = MyComponentB;
const VarTest2 = function () {
    return (
        <div>
            <p>gg</p>
        </div>
    );
};

export { MyComponentA, MyComponentB, varTest, VarTest2, VarTest3 };
