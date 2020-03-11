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
        <th colSpan="2" align="left">{props.category}</th>
    </tr>
}

function ProductTable (props) {
    const products = props.products
    const lists = []
    const key = []
    const { filterText, inStockOnly } = props
    products.forEach(item => {
        if ((!filterText || item.name.includes(filterText)) && (!inStockOnly || item.stocked)) {
            const index = key.indexOf(item.category)
            if (index === -1) {
                key.push(item.category)
                lists[lists.length] = [item]
            } else {
                lists[index].push(item)
            }
        }
    })
    return <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {
                lists.map((list, index) =>
                    <Fragment key={list[0].name + index}>
                        <ProductCategoryRow category={list[0].category} />
                        {list.map(item => <ProductRow {...item} key={item.name} />)}
                    </Fragment>
                )
            }
        </tbody>
        {
            !lists.length && 
            <tfoot>
                <tr>
                    <th colSpan="2">No data</th>
                </tr>
            </tfoot>
        }
    </table>
}

class SearchBar extends React.Component {
    onFilterTextChange = e => {
        this.props.onFilterTextChange(e.target.value)
    }
    onInStockChange = e => {
        this.props.onInStockChange(e.target.checked)
    }
    render () {
        return <div>
            <input value={this.props.search} onChange={this.onFilterTextChange} type="text" placeholder="Search..." />
            <p>
                <input checked={this.props.inStockOnly} onChange={this.onInStockChange} type="checkbox" />
                <label>Only Show products in stock</label>
            </p>
        </div>
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }
    handleFilterTextChange = filterText => {
        this.setState({
            filterText
        })
    }
    handleInStockChange = inStockOnly => {
        this.setState({
            inStockOnly
        })
    }
    render () {
        return <fieldset>
            <legend>Test</legend>
            <SearchBar
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange}
                onInStockChange={this.handleInStockChange}
            />
            <ProductTable
                products={data}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
            />
        </fieldset>
    }
}

export default FilterableProductTable