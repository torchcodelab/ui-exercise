import React, { Component } from 'react';

import './footer.css';

export default class Footer extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <footer>
                <div className="wrapper">
                    <p>Built with React v{React.version}</p>
                    <p className="attribution">
                        Email icon by Dinosoft Labs from the Noun Project
                    </p>
                </div>
            </footer>
        )
    }
}


