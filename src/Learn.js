import React, { Fragment } from 'react'
import Welcome from './components/learn/Welcome'
import Clock from './components/learn/Clock'
import Form from './components/learn/Form'
import LoginControl from './components/learn/LoginControl'

class Learn extends React.Component {
    componentDidMount () {
        console.log('learn componentDidMount')
    }
    componentWillUnmount () {
        console.log('learn componentWillUnmount')
    }
    render () {
        return (
            <Fragment>
                <Welcome name="pawel" />
                <Clock />
                <Clock />
                <Form />
                <LoginControl />
            </Fragment>
        )
    }
}

export default Learn