import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const createTodo = (description) => api.post('todos', description)
export const getTodos = (search) => api.get('todos' + search)
export const deleteTodo = (todo) => api.delete('todos/' + todo.id)
export const alterTodo = (todo) => api.put('todos/' + todo.id, todo)

const apis = {
  getTodos,
  createTodo,
  deleteTodo,
  alterTodo
}

export default apis