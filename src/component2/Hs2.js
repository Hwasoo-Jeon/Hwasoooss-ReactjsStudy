import React, { Component } from 'react';

class Hs2 extends Component {
    constructor(props) {
        super(props);
        this.myname = props.myname;
        this.myage = props.myage;
        this.hobby = props.hobby;
    }

    render() {
        return (
            <div>
                <p>{this.myname}</p>
                <p>{this.myage}</p>
                <ul>{this.hobby && this.hobby.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </div>
        );
    }
}

export default Hs2;
