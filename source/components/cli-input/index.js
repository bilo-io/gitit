import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class MyComponent extends Component {
    static propTypes = {
    }
    state = {
    }
    render() {
        const { onChange, value } = this.props
        return (
            <input value={ value } id='command-input' onChange={(e) => onChange(e.target.value)} />
        )
    }
}
