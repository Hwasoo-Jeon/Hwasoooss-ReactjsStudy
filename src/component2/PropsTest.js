import React, { Component } from 'react';

class MyComponent3 extends Component {
    constructor(props) {
        super(props);
        console.log('생성자호출');
        this.myname = 'hs';
        this.myage = 22;
    }
    render() {
        const { title, price, subject } = this.props;
        return (
            <div>
                <h2>자식 컴 포넌트 2</h2>
                <p>title :{this.props.title}</p>
                <p>title :{this.props.price}</p>
                <h2>자식 컴 포넌트 2 - 비구조화 컴포넌트</h2>
                <p>title :{title}</p>
                <p>title :{price}</p>
                <p>내ㅔㅣ름 :{this.myname}</p>
                <p>t나ㅣㅇ;:{this.myage}</p>
                <hr />
                <ul>{subject && subject.map((item, index) => <li key={index}>{item}</li>)}</ul>
                <hr />
            </div>
        );
    }
}
function MyComponentD(props) {
    const arr = ['html', 'ggg', 'csss'];
    const bookPrice = 30000;
    return (
        <div>
            <h1>부모</h1>
            <MyComponentD2 title="React" price={bookPrice} subject={arr}>
                첫번째Child
            </MyComponentD2>
            <hr></hr>
            <MyComponent3 title="SpringBoot" price={bookPrice} subject={arr}>
                두번째Child
            </MyComponent3>

            <h1>부모종료</h1>
        </div>
    );
}

function MyComponentD2(props) {
    const myname = 'hs';
    const myage = 22;
    const { title, price, children, subject } = props;
    return (
        <div>
            <h2>자식Component</h2>
            <p>{props.title}</p>
            <p>{props.price}</p>
            <h2>비구조화 할당</h2>
            <p>{title}</p>
            <p>{price}</p>
            <p>children{children}</p>
            <p>내ㅔㅣ름 :{myname}</p>
            <p>t나ㅣㅇ;:{myage}</p>
            <hr />
            <ul>{subject && subject.map((item, index) => <li key={index}>{item}</li>)}</ul>
            <hr />
        </div>
    );
}

export { MyComponentD, MyComponent3 };
