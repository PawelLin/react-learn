import React, { Fragment } from 'react'
import Welcome from './components/learn/Welcome'
import Clock from './components/learn/Clock'
import Form from './components/learn/Form'
import LoginControl from './components/learn/LoginControl'
import Map from './components/learn/Map'
import Forms from './components/learn/Forms'
import Calculator from './components/learn/StateUp'
import Composition from './components/learn/Composition'
import ProductTable from './components/learn/Test'
import JSXArray from './components/learn/JSXArray'
import Hooks from './components/learn/Hooks'

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
                <Hooks />
                <ProductTable />
                <Welcome name="pawel" />
                <Clock />
                <Form />
                <LoginControl />
                <Map />
                <Forms />
                <Calculator />
                <Composition />
                <ul>
                    <JSXArray />
                </ul>
            </Fragment>
        )
    }
}

export default Learn