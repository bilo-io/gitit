import { connect } from 'react-redux';
import React, { Component } from 'react'
import CliOutput from '../../components/cli-output'
import CliInput from '../../components/cli-input'
import gitLogo from '../../img/gitlogo.png'
import { gitit } from '../../../lib/gitit'

import {
    myAction
} from './actions';
import './style.scss'

const mapStateToProps = (state, ownProps) => { 
    let _state = state.home;
    return {
        myProps: _state.myProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}


export class Home extends Component {
    state = {
        command: 'status'
    }

    componentDidMount() {
        console.log(gitit('init'))
        this.setState({
            command: 'git status'
        })
    }
    render() {
        const { command } = this.state
        return (
            <div className='page page-padded'>
                <div className='page-content'>
                    <div className='logo'><img className='logo' s={gitLogo} /></div>
                    <div className='title'>gitit</div>
                    <CliInput value={command} onChange={ (value) => this.setState({ command: value})} />
                    <CliOutput content={ command ? gitit(command.split(' ').slice(1).join(' ')) : 'type a git command and see what happens'} />
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

