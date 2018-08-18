import React, { Component } from 'react'
import Moment from 'react-moment'

import { getEmail } from "../../providers"

import './messagesList.css'
import Message from "../message"
import Celebration from "../celebration";

const MessageSnippet = (body) => {
    const messageStripped = body.message.replace(/(<([^>]+)>)/ig,"");
    const messageTrimmed = messageStripped.substring(0, 128);

    return(
        <p className="message__intro">
            {messageTrimmed}...
        </p>
    )
};

export default class MessagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageBody: '',
            showMessage: false
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
        console.log("new props are", newProps);
    }

    toggleMessageView = (index) => {
        const expandedState = [...this.state.showMessage];
        expandedState[index] = !this.state.showMessage[index];

        this.setState({
            showMessage: expandedState
        });
    };

    doArchiveMessage = (index) => {
        const filteredMessages = this.state.messages.filter((x,i) => {
           return (i !== index);
        });

        this.setState({
            messages: filteredMessages
        });
    };

    render() {
        const { messages, showMessage} = this.state;
        return (
            <ul className="messages__list">
                {messages.length === 0 &&
                    <li className="message inbox-zero">
                       <Celebration>
                           <p>Achievement Unlocked!!</p>
                           <p className="shout">INBOX ZERO!</p>
                       </Celebration>
                    </li>
                }
                {messages.length >= 1 && messages.map((message, index) =>
                    <li className="message " key={index}>
                        <a className="message__trigger-icon icon" onClick={() => this.toggleMessageView(index)}>
                            {showMessage[index] &&
                                <svg width="256" height="256" viewBox="0 0 256 256"><title>Close Message</title><path d="M137.051 128l75.475-75.475c2.5-2.5 2.5-6.551 0-9.051s-6.551-2.5-9.051 0L128 118.949 52.525 43.475c-2.5-2.5-6.551-2.5-9.051 0s-2.5 6.551 0 9.051L118.949 128l-75.475 75.475a6.399 6.399 0 0 0 4.525 10.926 6.38 6.38 0 0 0 4.525-1.875L128 137.051l75.475 75.475c1.25 1.25 2.888 1.875 4.525 1.875s3.275-.625 4.525-1.875c2.5-2.5 2.5-6.551 0-9.051L137.051 128z"/></svg>
                            }
                            {!showMessage[index] &&
                                <svg width="32" height="32" viewBox="0 0 32 32"><title>Expand Message</title><path fill="#121313" d="M24.285 11.284L16 19.571l-8.285-8.288a1.01 1.01 0 1 0-1.429 1.43l8.999 9.002a1.009 1.009 0 0 0 1.428 0l8.999-9.002a1.01 1.01 0 1 0-1.427-1.429z"/></svg>
                            }
                        </a>
                        <a className="message__delete-icon" onClick={() => this.doArchiveMessage(index)}>
                            <svg width="48" height="48" viewBox="0 0 48 48"><title>Archive Message</title><path d="M41.09 10.45l-2.77-3.36A3.043 3.043 0 0 0 36 6H12c-.93 0-1.76.43-2.31 1.09l-2.77 3.36C6.34 11.15 6 12.03 6 13v25c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V13c0-.97-.34-1.85-.91-2.55zM24 35L13 24h7v-4h8v4h7L24 35zM10.25 10l1.63-2h24l1.87 2h-27.5z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                        </a>
                        <a className="message__trigger" onClick={() => this.toggleMessageView(index)}>
                            <div className="message__details">
                                <span className="sender">{message.sender}</span>
                                <Moment format="h:mm A M/D/YYYY">{message.date}</Moment>
                            </div>
                            <p className="message__subject">
                                {message.subject}
                            </p>
                            {!showMessage[index] &&
                                <MessageSnippet message={message.body}/>
                            }
                            {showMessage[index] &&
                                <Message
                                    message={message.body}
                                />
                            }
                            {message.tags.length >= 1 &&
                            <ul className="message__tags">
                                <li className="icon icon--tag">
                                    <svg width="32" height="32" viewBox="0 0 32 32">
                                        <path
                                            d="M31.391 13.883l-5-8A3.999 3.999 0 0 0 23 4.003H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h19c1.379 0 2.66-.711 3.391-1.881l5-8a3.993 3.993 0 0 0 0-4.239zm-1.696 3.179l-5 8.002a1.988 1.988 0 0 1-1.695.939H4c-1.103 0-2-.898-2-2v-16c0-1.103.897-2 2-2h19a1.99 1.99 0 0 1 1.695.939l5 8a2.01 2.01 0 0 1 0 2.12z"/>
                                        <path
                                            d="M23 13.003a3 3 0 1 0-.002 5.998A3 3 0 0 0 23 13.003zm0 5.001a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                                    </svg>
                                </li>
                                {message.tags.map((tag, index) =>
                                    <li className="tag" key={index}>{tag}</li>
                                )}
                            </ul>
                            }
                        </a>
                    </li>
                )}
            </ul>
        )
    }
}


