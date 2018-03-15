import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class CliOutput extends Component {
    static propTypes = {
        content: PropTypes.object
    }
    state = {
    }
    render() {
        const { content } = this.props;
        return (
            <div className='output'>
                { content ? content: null }
            </div>
        )
    }
}
