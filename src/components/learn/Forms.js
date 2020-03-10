import React from 'react'

class Forms extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value: '',
            text: 'textarea',
            select: 'green',
            selects: []
        }
    }
    handleChange = e => {
        const value = e.target.value
        if (/^[a-zA-Z]*$/.test(value)) {
            this.setState({
                value
            })
        }
    }
    handleChangeText = e => {
        this.setState({
            text: e.target.value
        })
    }
    handleChangeSelect = e => {
        this.setState({
            select: e.target.value
        })
    }
    handleChangeSelects = e => {
    }
    handleClickSelects = e => {
        const value = e.target.value
        const index = this.state.selects.indexOf(value)
        if (index > -1) {
            this.setState({
                selects: this.state.selects.filter(item => item !== value)
            })
        } else {
            if (value) {
                this.setState({
                    selects: [...this.state.selects, value]
                })
            }
        }
    }
    handleSubmit = e => {
        console.log(this.state.value)
        e.preventDefault()
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Form</legend>
                    <div>
                        <label>input</label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} /><br/>
                    </div>
                    <div>
                        <label>textarea</label>
                        <textarea value={this.state.text} onChange={this.handleChangeText} />
                    </div>
                    <div>
                        <label>select</label>
                        <select value={this.state.select} onChange={this.handleChangeSelect}>
                            <option value="red">red</option>
                            <option value="green">green</option>
                            <option value="yellow">yellow</option>
                        </select>
                    </div>
                    <div>
                        <label>select-multiple</label>
                        <select multiple={true} value={this.state.selects} onChange={this.handleChangeSelects}>
                            <option value="red" onClick={this.handleClickSelects}>red</option>
                            <option value="green" onClick={this.handleClickSelects}>green</option>
                            <option value="yellow" onClick={this.handleClickSelects}>yellow</option>
                        </select>
                    </div>
                    <button type="submit">submit</button>
                </fieldset>
            </form>
        )
    }
}

export default Forms