import React from 'react'
import Greeting from './Greeting'

function LoginButton (props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton (props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

class LoginController extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    handleLoginClick = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogoutClick = () => {
        this.setState({
            isLoggedIn: false
        })
    }
    render () {
        const isLoggedIn = this.state.isLoggedIn
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {
                    isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />
                }
            </div>
        )
    }
}

export default LoginController