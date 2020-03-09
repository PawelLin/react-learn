import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render () {
        return (
            <div onClick={this.handleClick}>{this.props.content}</div>
        )
    }
    handleClick () {
        this.props.deleteItem(this.props.index)
    }
}
Item.defaultProps = {
    content: '123'
}
Item.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default Item