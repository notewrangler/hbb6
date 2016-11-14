import axios from 'axios';

const Promise = require('es6-promise').polyfill(); 


export const GET_NEXT_CONCERT = 'GET_NEXT_CONCERT';
export const GET_SERIES = 'GET_SERIES';
export const GET_GUESTS = 'GET_GUESTS';
export const GET_CONCERT = 'GET_CONCERT';
export const GET_ARTIST = 'GET_ARTIST';

const ROOT_URL = 'http://heartlandbigband.org/api'


export function getNextConcert() {
	const request = axios.get(`${ROOT_URL}/seriesList`);
	return (dispatch) => {
		request.then(({data}) => {
			console.log(data);
			const today = new Date;
			var upcoming = [];
			upcoming = data.filter(function(a){
				var next = new Date(a.nextDay);
				if (Date.parse(next) >= Date.parse(today)) {
					return true
				} else {
					return false
				}
			});
			var nextC = upcoming[0]
			console.log(nextC);
			dispatch({type: GET_NEXT_CONCERT,	payload: nextC})
		});
	};
}



export function getGuests() {
	const request = axios.get(`${ROOT_URL}/guestCards`);
		return (dispatch) => {
			request.then(({data}) => {
			  dispatch({type: GET_GUESTS, payload: data})
			});
		};
	}

export function getSeries(){
	const request = axios.get(`${ROOT_URL}/seriesList`);
	return (dispatch) => {
		request.then(({data}) => {
			dispatch({type: GET_SERIES,	payload: data})
		});
	};
}



export function getConcert(id) {
	const request = axios.get(`${ROOT_URL}/seriesList/${id}`);
	return (dispatch) => {
		request.then(({data}) => {
			console.log(data);
			dispatch({type: GET_CONCERT, payload: data})
		});
	}
}

export function getArtist(id) {
	const request = axios.get(`${ROOT_URL}/guests/${id}`)
	return (dispatch) => {
		request.then(({data}) => {
			dispatch({type: GET_ARTIST, payload: data})
		});
	}
}
