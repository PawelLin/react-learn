import React, { Fragment } from 'react'

const data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

function ProductRow (props) {
    const name = props.stocked ? <span>{props.name}</span> : <span style={{color: 'red'}}>{props.name}</span>
    return <tr>
        <td>{name}</td>
        <td>{props.price}</td>
    </tr>
}

function ProductCategoryRow (props) {
    return <tr>
        <td colSpan="2">{props.category}</td>
    </tr>
}

function ProductTable (props) {
    const products = props.products
    return <table>
        <thead>
            <th>Name</th>
            <th>Price</th>
        </thead>
        <tbody>
            {products.map((list, index) => <Fragment key={list[0].name + index}>
                <ProductCategoryRow category={list[0].category} />
                {list.map(item => <ProductRow {...item} key={item.name} />)}
            </Fragment>)}
        </tbody>
    </table>
}

class FilterableProductTable extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            search: '',
            inStockOnly: false
        }
    }
    render () {
        const list = []
        const key = []
        data.forEach(item => {
            const index = key.indexOf(item.category)
            if (index === -1) {
                key.push(item.category)
                list[list.length] = [item]
            } else {
                list[index].push(item)
            }
        })
        return <ProductTable products={list} />
    }
}

export default FilterableProductTable