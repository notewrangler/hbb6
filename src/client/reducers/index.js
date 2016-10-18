import { GET_NEXT_CONCERT,
				 GET_SERIES,
				 GET_CONCERT,
				 GET_GUESTS,
				 GET_ARTIST} from '../actions/index';



export const nextConcert = function(state = {}, action) {
	switch(action.type){
		case GET_NEXT_CONCERT:
			return [...state, action.payload];
		default:
			return state;
	}
}

export const series = function(state = [], action) {
	switch (action.type) {
		case GET_SERIES:
			return [...state, action.payload];
		default:
			return state;
	}
}

export const guests = function(state = [], action) {
	switch (action.type) {
		case GET_GUESTS:
			return [...state, action.payload];
		default:
			return state;
	}
}

export const concert = function(state = {}, action){
	switch (action.type) {
		case GET_CONCERT:
			return[action.payload, ...state];
		default:
			return state;
	}
}

export const artist = function(state = {}, action){
	switch (action.type) {
		case GET_ARTIST:
			return[...state, action.payload];
		default:
			return state;
	}
}
