import React from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'

const App = () => (
    <fieldset>
        <legend>redux</legend>
        <div>
            <AddTodo></AddTodo>
            <VisibleTodoList></VisibleTodoList>
            <Footer></Footer>
        </div>
    </fieldset>
)

export default App