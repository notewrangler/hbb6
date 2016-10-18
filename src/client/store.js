import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { series, nextConcert, concert, guests, artist } from './reducers/index';
// import promise from 'redux-promise';
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
  series: series,
  concert: concert,
	nextC: nextConcert,
  guestList: guests,
  artist: artist
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const store = createStore(rootReducer, composeEnhancers(
//   applyMiddleware(thunkMiddleware, loggerMiddleware)
// ));

const store = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore)(rootReducer);


// crerate the store
export default store;

// concert,
// guests,
// artist
