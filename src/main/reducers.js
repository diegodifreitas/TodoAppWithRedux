import {combineReducers} from 'redux'

const rooReducer = combineReducers({
    todo: () => ({
        description: "Ler Livro",
        list: [{
            id:1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            id:2,
            description: 'Reunião com a equipe as 10:00H',
            done: false
        }, {
            id:3,
            description: 'Consulta médica na terça',
            done: false
        }]
    })
})

export default rooReducer