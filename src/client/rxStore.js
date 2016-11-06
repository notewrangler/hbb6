import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { seriesReducer, nextConcert, guestsReducer } from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'

// import reducers here

let loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});


// combine reducers
const rootReducer = combineReducers({
  // put reducers here
  nextC: nextConcert,
  guests: guestsReducer,
  series: seriesReducer
})


const store = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore)(rootReducer);


// create the store
export default store;
