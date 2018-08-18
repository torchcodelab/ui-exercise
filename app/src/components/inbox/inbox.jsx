import React, { Component } from 'react'

import MessagesList from "../messagesList"
import TagList from '../tags'

import './inbox.css';

export default class Inbox extends Component {
    render() {
        return (
            <div className="inbox">
                <div className="wrapper">
                    <h2 className="title--page">INBOX</h2>
                </div>
                <div className="wrapper wrapper--flex">
                    <section className="sidebar">
                        <TagList/>
                    </section>
                    <main>
                        <MessagesList/>
                    </main>
                </div>
            </div>
        );
    }
}

