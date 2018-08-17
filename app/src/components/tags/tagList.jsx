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
            <ul className="tag__list">
                {tags.length >= 1 && tags.map((tag, index) =>
                    <li className="tag" key={index}>
                        {tag.name}
                    </li>
                )}
            </ul>
        )
    }
}


