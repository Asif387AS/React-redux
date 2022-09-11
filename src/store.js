import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux'
// const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store=createStore(rootReducer,composeWithDevTools());

export default store;