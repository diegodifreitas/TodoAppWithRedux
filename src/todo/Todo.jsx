import React, { Component } from 'react'

import Api from '../main/Api'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    handleAdd() {
        const description = { description: this.state.description, done: false }
        Api.createTodo(description)
            .then(res => this.refresh())
    }
    handleRemove(todo) {
        Api.deleteTodo(todo)
            .then(res => this.refresh(this.state.description))
    }
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    handleMarkAsDone(todo) {
        todo.done = true
        Api.alterTodo(todo)
            .then(res => this.refresh(this.state.description))
    }
    handleMarkAsPending(todo) {
        todo.done = false
        Api.alterTodo(todo)
            .then(res => this.refresh(this.state.description))
    }
    handleSearch() {
        this.refresh(this.state.description)
    }
    handleClear() {
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `?q=${description}` : ''
        Api.getTodos(search)
            .then(res => {
                this.setState({ ...this.state, description, list: res.data })
            })
    }

    render() {
        return (
            <div>
                <PageHeader name='Todo' small='Cadastro' />
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch} 
                    handleClear={this.handleClear}/>
                <TodoList
                    list={this.state.list}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}