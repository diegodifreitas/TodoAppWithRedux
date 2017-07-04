import React from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default props => (
    <div>
        <PageHeader name='Todo' small='Cadastro' />
        <TodoForm />
        <TodoList />
    </div>
)