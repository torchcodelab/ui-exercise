import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import './message.css';

export default class Message extends Component {
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


