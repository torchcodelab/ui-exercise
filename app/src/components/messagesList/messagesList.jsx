import React, { Component } from 'react'
import Moment from 'react-moment'

import { getEmail } from "../../providers"

import './messagesList.css'
import Message from "../message"
import Modal from "../modal"

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
            isOpen: false
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

    toggleMessageModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { messages, isOpen} = this.state;
        return (
            <div className="messages wrapper">

                <ul className="messages__list">
                    {messages.length >= 1 && messages.map((message, index) =>
                        <li className="message" key={index} onClick={this.toggleMessageModal}>
                            <Modal
                                show={isOpen}
                                delay={null}
                            >
                                <Message
                                    message={message.body}
                                />
                            </Modal>
                            <div className="message__details">
                                <span className="sender">{message.sender}</span>
                                <Moment format="h:mm A M/D/YYYY">{message.date}</Moment>
                            </div>
                            <p className="message__subject">
                                {message.subject}
                            </p>
                            <MessageSnippet message={message.body}/>
                            {message.tags.length >= 1 &&
                                <ul className="message__tags">
                                    {message.tags.map((tag, index) =>
                                        <li className="tag" key={index}>{tag}</li>
                                    )}
                                </ul>
                            }
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


