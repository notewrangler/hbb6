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

const INITIAL_SERIES_STATE = {all: [], concert: null};

export const seriesReducer = function(state = INITIAL_SERIES_STATE, action) {
	switch (action.type) {
		case GET_SERIES:
			return {...state, all: action.payload};
		case GET_CONCERT:
			return {...state, concert: action.payload};
		default:
			return state;
	}
}

const INITIAL_GUESTS_STATE = {all: [], artist: null};

export const guestsReducer = function(state = INITIAL_GUESTS_STATE, action) {
	switch (action.type) {
		case GET_GUESTS:
			return {...state, all: action.payload};
		case GET_ARTIST:
			return {...state, artist: action.payload};
		default:
			return state;
	}
}
