import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './modal.css';

export default class Modal extends Component {
    render() {
        if(!this.props.show) {
            return null;
        }

        const { message } = this.props;
        return (
            <div className="modal__backdrop">
                <div className="modal__content">
                    {this.props.children}
                    MESSAGE {message}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node
};
