import React, { Component, Fragment } from 'react'
import './App.css'
import Item from './item'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: '',
            list: ['111', '222', '333', '444']
        }
    }
    inputChange (e) {
        // if (!e.target.value || /^(0|[1-9]\d*)$/.test(e.target.value)) {
            this.setState({
                value: this.input.value
            })
        // }
    }
    addList () {
        this.setState({
            list: [...this.state.list, this.state.value]
        })
    }
    deleteItem (index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    render () {
        return (
            <Fragment>
                <label htmlFor="label">标签：</label>
                <input id="label" value={this.state.value} onChange={this.inputChange.bind(this)} ref={input => this.input = input}></input>
                <button onClick={this.addList.bind(this)}>add</button>
                <ul className="blue">
                    {
                        this.state.list.map((item, index) =>
                            <li key={item + index}>
                                <Item
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                ></Item>
                            </li>
                            // <li
                            //     key={item + index}
                            //     onClick={this.deleteItem.bind(this, index)}
                            //     dangerouslySetInnerHTML={{__html: item}}
                            // ></li>
                        )
                    }
                </ul>
            </Fragment>
        )
    }
}

export default App