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
        this.handleChange= this.handleChange.bind(this)
        this.refresh()
}

    handleAdd() {
        const description = { description : this.state.description }
        Api.createTodo( description )
            .then( res => this.refresh())
    }
     handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    refresh(){
        Api.getTodos()
            .then( res => {
                 this.setState({ ...this.state, description:'', list : res.data }) 
            })
    }

    render() {
        return (
            <div>
                <PageHeader name='Todo' small='Cadastro' />
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}  />
                <TodoList list={this.state.list} />
            </div>
        )
    }
}