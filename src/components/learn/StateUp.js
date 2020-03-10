import React, { Fragment } from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function BoilingVerdict (props) {
    const celsiusText = props.celsius >= 100 ? 'The water would boil' : 'The water would not boil.'
    return <p>{celsiusText}</p> 
}

class TemperatureInput extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }
    handleChange = e => {
        this.props.onTemperatureChange(e.target.value, this.props.scale)
    }
    render () {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

function toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
  
function toFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32
}

function tryConvert (temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

class Calculator extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            scale: 'c',
            temperature: ''
        }
    }
    handleChange = (temperature, scale) => {
        this.setState({
            scale,
            temperature
        })
    }
    render () {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
        return <Fragment>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </Fragment>
    }
}

export default Calculator