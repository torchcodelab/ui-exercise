import React, { Component } from 'react';
import { getTags } from "../../providers";

import './tags.css';


export default class MessagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
    }

    componentDidMount() {
        getTags().then((response) => {
            this.setState({
                tags: response.tags
            });
        });
    }

    render() {
        const { tags } = this.state;
        return (
            <div className="wrapper--tags">
                <h3 className="title--sidebar">My Tags</h3>
                <ul className="tag__list">
                    {tags.length >= 1 && tags.map((tag, index) =>
                        <li className="tag" key={index}>
                            <span className="icon icon--tag">
                                <svg width="32" height="32" viewBox="0 0 32 32"><path d="M31.391 13.883l-5-8A3.999 3.999 0 0 0 23 4.003H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h19c1.379 0 2.66-.711 3.391-1.881l5-8a3.993 3.993 0 0 0 0-4.239zm-1.696 3.179l-5 8.002a1.988 1.988 0 0 1-1.695.939H4c-1.103 0-2-.898-2-2v-16c0-1.103.897-2 2-2h19a1.99 1.99 0 0 1 1.695.939l5 8a2.01 2.01 0 0 1 0 2.12z"/><path d="M23 13.003a3 3 0 1 0-.002 5.998A3 3 0 0 0 23 13.003zm0 5.001a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                            </span>
                            {tag.name}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


