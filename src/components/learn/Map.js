import React, { Fragment } from 'react'

class Map extends React.Component {
    render () {
        const list = [
            { id: 1, name: 'name1' },
            { id: 2, name: 'name2' }
        ]
        return <Fragment>
            <ul>
                {list.map(item => <li key={item.id.toString()}>{item.name}</li>)}
            </ul>
            <ul>
                {list.map(item => <li key={item.id.toString()}>{item.name}</li>)}
            </ul>
        </Fragment>
    }
}

export default Map