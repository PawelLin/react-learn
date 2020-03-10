import React from 'react'

function FancyBorder (props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

function WelcomeDialog () {
    return (
        <FancyBorder>
            <h1>title</h1>
            <p>Thank you for visiting our spacecraft!</p>
        </FancyBorder>
    )
}

function Composition (props) {
    return <WelcomeDialog />
}

export default Composition