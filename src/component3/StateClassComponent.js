import React, { Component } from 'react';

class StateClassComponent extends Component {
    constructor() {
        super();
        this.state = { su: 0 };
    }
    handleSU = (event) => {
        let target = event.target.innerHTML;
        if (target === '+') {
            this.setState({ su: this.state.su + 1 }, () => {
                console.log('잘되고있나?' + this.state.su);
            });
        } else if (target === '-') {
            this.setState({ su: this.state.su - 1 }, () => {
                console.log('잘되고있나?' + this.state.su);
            }); //콜백
        }
    };
    render() {
        const { su } = this.state;
        return (
            <div>
                <h1>stateClassComponent 연습</h1>
                <p>현재값 :{su}</p>
                <button onClick={this.handleSU}>+</button>
                <button onClick={this.handleSU}>-</button>
            </div>
        );
    }
}

export default StateClassComponent;
