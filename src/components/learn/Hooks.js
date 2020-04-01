import React, { useState, Fragment, useEffect } from 'react'

function Example () {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
}

function Hooks () {
    return <Fragment>
        <Example />
    </Fragment>
}

export default Hooks