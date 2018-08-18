import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import './message.css';

export default class Message extends Component {

    render() {
        const { message } = this.props;
        return (
            <div className="message__body">
                {renderHTML(message)}
            </div>
        )
    }
}


