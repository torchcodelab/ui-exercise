import React, { Component } from 'react';
import Moment from 'react-moment'
import 'moment-timezone'

import { getEmail } from "../../providers";

import './messagesList.css';
// import Message from "../message/message";


export default class MessagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           messages: []
        };
    }

    componentDidMount() {
        getEmail().then((response) => {
            this.setState({
                messages: response.messages
            });
        });
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
    }

    render() {
        const { messages } = this.state;
        return (
            <div className="messages wrapper">
                <ul className="messages__list">
                    {messages.length >= 1 && messages.map((message, index) =>
                        <li className="message" key={index}>
                            <Moment format="M/D/YYYY h:mm A">{message.date}</Moment>
                            <br/>
                            {message.sender}
                            <br/>
                            {message.subject}
                            {/*
                            <Message
                                message={message.body}
                            />
                            */}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


