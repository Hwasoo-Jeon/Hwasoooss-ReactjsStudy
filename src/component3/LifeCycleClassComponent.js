import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '준비', buttonVisioble: true };
        console.log('LifeCycleClassComponent Constructor~~~~~~~');
    }

    componentDidMount() {
        console.log('componentDidMount Constructor~~~~~~~');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate Constructor~~~~~~~');
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate Constructor~~~~~~~');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount Constructor~~~~~~~');
    }

    render() {
        console.log('render~~~~~~~');
        const { title, buttonVisible } = this.state;
        return (
            <div>
                <h1>연습 : {title}</h1>
                <button
                    onClick={() => {
                        this.setState({ title: '보이기', buttonVisible: true });
                    }}
                >
                    자식컴포넌트보이기
                </button>
                {buttonVisible && (
                    <div>
                        <button
                            onClick={() => {
                                this.setState({ title: '감추기', buttonVisible: false });
                            }}
                        >
                            리셋
                        </button>
                        <LifeCycleClassComponent2></LifeCycleClassComponent2>
                    </div>
                )}
            </div>
        );
    }
}

class LifeCycleClassComponent2 extends Component {
    constructor(props) {
        super(props);
        console.log('자식 ~~~~~~~~LifeCycleClassComponent Constructor~~~~~~~');
    }

    componentDidMount() {
        console.log('자식 ~~~~~~~~componentDidMount Constructor~~~~~~~');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('자식 ~~~~~~~~shouldComponentUpdate Constructor~~~~~~~');
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('자식 ~~~~~~~~componentDidUpdate Constructor~~~~~~~');
    }

    componentWillUnmount() {
        console.log('자식 ~~~~~~~~componentWillUnmount Constructor~~~~~~~');
    }

    render() {
        return (
            <div>
                <h1>자식이다~</h1>
            </div>
        );
    }
}

LifeCycleClassComponent.propTypes = {};

export { LifeCycleClassComponent as default, LifeCycleClassComponent2 };
