import Api from '../main/Api'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = Api.getTodos('')
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    return dispatch => {
        Api.createTodo( { description } )
            .then( resp => dispatch(clear()))
            .then( resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        Api.alterTodo({ ...todo, done: true })
            //.then( resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
            .then( resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        Api.alterTodo({ ...todo, done: false })
            .then( resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        Api.deleteTodo(todo)
            .then( resp => dispatch(search())) 
    }
}

export const clear = () => {
    return { type: 'TODO_CLEAR'}
}