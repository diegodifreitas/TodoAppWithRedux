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
    const request = Api.createTodo( { description } )
    return{
        type: 'TODO_ADDED',
        payload: request
    }
}