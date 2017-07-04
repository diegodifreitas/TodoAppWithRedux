import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const createTodo = (description) => api.post('todos', description)
export const getTodos = ( ) => api.get('todos')

const apis = {
  getTodos,
  createTodo
}

export default apis