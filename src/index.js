import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './main/App'
import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({
    comment: () => ({ value: 'Opaaaaaa!' })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, document.getElementById('app'));
registerServiceWorker();
