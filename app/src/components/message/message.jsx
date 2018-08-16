import React, { Component } from 'react';
// import Moment from 'react-moment'
import renderHTML from 'react-render-html';

import './message.css';

export default class Message extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
    }

    render() {
        const { message } = this.props;
        return (
            <div className="message">
                {renderHTML(message)}
            </div>
        )
    }
}


