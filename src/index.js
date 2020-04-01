import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers'

import App from './App'
import Learn from './Learn'
import AppRedux from './redux/App'

let store = createStore(todoApp)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <AppRedux />
    </Provider>,
    document.getElementById('root')
)
