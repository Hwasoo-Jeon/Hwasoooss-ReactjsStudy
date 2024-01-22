import React, { Component } from 'react';

class StateTest extends Component {
    constructor() {
        super();
        this.state = { count: 0, message: 'class 생성자로부터 state 초기값 관리' };
        this.handleClick2 = this.handleClick2.bind(this);
    }
    //선언적 함수의 this와 화살표함수의 this 는 다르다...
    handleClick = (event) => {
        let target = event.target.innerHTML;
        console.log(target);
        if (target === '증가2') {
            this.setState({ count: this.state.count + 1, message: 'handle증가' });
        } else {
            this.setState({ count: this.state.count - 1, message: 'handle감소' });
        }
    };

    handleClick2(event) {
        let target = event.target.innerHTML;
        console.log(target + '직접바인딩');
        if (target === '선언증가') {
            this.setState({ count: this.state.count + 1, message: 'handle증가' });
        } else if (target === '선언감소') {
            this.setState({ count: this.state.count - 1, message: 'handle감소' });
        }
    }
    render() {
        const { count, message } = this.state;
        return (
            <div>
                <p>
                    현재값 : {count}......{message}
                </p>
                <button
                    onClick={() => {
                        this.setState({ count: count + 1, message: 'add 수행완료' });
                    }}
                >
                    증가
                </button>
                <button onClick={this.handleClick}>증가2</button>
                <button onClick={this.handleClick}>감소</button>
                <button onClick={this.handleClick2}>선언증가</button>
                <button onClick={this.handleClick2}>선언감소</button>
            </div>
        );
    }
}

export default StateTest;
