import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './redux/reducers'

// import App from './App'
// import Learn from './Learn'
import AppRedux from './redux/App'

let store = createStore(todoApp)
// let next = store.dispatch
// store.dispatch = function dispatchAndLog(action) {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// }
applyMiddlewareByMonkeypatching(store, [logger, test])
function logger(store) {
    let next = store.dispatch
    return function dispatchAndLog1(action) {
        console.log('dispatching', action)
        let result = next(action)
        console.log(store)
        return result
    }
}
function test(store) {
    let next = store.dispatch
    return function dispatchAndLog2(action) {
        console.log('test', action)
        let result = next(action)
        console.log(store)
        return result
    }
}

function applyMiddlewareByMonkeypatching(store, middlewares) {
    middlewares = middlewares.slice()
    middlewares.reverse()
    console.log(middlewares)
    // 在每一个 middleware 中变换 dispatch 方法。
    middlewares.forEach(middleware => 
        store.dispatch = middleware(store)
    )
}


ReactDOM.render(
    <Provider store={store}>
        <AppRedux />
    </Provider>,
    document.getElementById('root')
)
