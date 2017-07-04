import Api from '../main/Api'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `?q=${description}` : ''
        const request = Api.getTodos(search)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
}

export const add = (description) => {
    if (!description) {
        return dispatch => {
            dispatch(search())
        }
    } else {
        return dispatch => {
            Api.createTodo({ description })
                .then(resp => dispatch(clear()))
        }
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        Api.alterTodo({ ...todo, done: true })
            //.then( resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        Api.alterTodo({ ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        Api.deleteTodo(todo)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}