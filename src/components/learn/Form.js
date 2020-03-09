import React, { Fragment } from 'react'

// function Tip (props) {
//     return props.isError ? <span>请先输入内容</span> : null
// }
class Tip extends React.Component {
    componentDidUpdate () {
        console.log('tip update')
    }
    render () {
        return this.props.isError ? <span>请先输入内容</span> : null
    }
}

class Form extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            list: [1,2,3],
            content: '',
            isError: false
        }
    }
    handleChange = e => {
            this.setState({
                content: e.target.value,
                isError: !e.target.value
            })
    }
    handleAdd = e => {
        if (this.state.content) {
            this.setState((state) => {
                return {
                    list: state.list.concat(state.content),
                    content: '',
                }
            })
        } else {
            this.setState({
                isError: true
            })
        }
    }
    handleDelete (index) {
        const list = this.state.list
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    render () {
        return <Fragment>
            <input value={this.state.content} onChange={this.handleChange} />
            <button onClick={this.handleAdd}>Add</button>
            <Tip isError={this.state.isError} />
            <ul>
                { this.state.list.map((item, index) => <li key={`${item}-${index}`}>
                    {item} <button onClick={e => this.handleDelete(index, e)}>delete(=>)</button>&nbsp;
                    <button onClick={this.handleDelete.bind(this, index)}>delete(bind)</button>
                </li>) }
            </ul>
        </Fragment>
    }
}

export default Form