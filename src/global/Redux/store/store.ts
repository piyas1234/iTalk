
import { createStore, combineReducers, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeReducer } from './../Reducer/ThemeReducer';

 
const middleware = applyMiddleware(thunk)

const combinedReducer = combineReducers({
     
   Theme: ThemeReducer,
})

export const store = createStore(combinedReducer, composeWithDevTools(middleware))