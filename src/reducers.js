import {
 CHANGE_SEARCH_FIELD,
 REQUEST_ROBOTS_PENDING,
 REQUEST_ROBOTS_SUCCES,
 REQUEST_ROBOTS_FAILED
} from './constants'

const initalStateSearch = {
	searchField: ''
}

export const searchRobots = (state=initalStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField:action.payload});
		default:
			return state;
	}
}

const initalStateRobots = {
	isPendidng: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initalStateRobots, action={}) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPendidng:true})
		case REQUEST_ROBOTS_SUCCES:
			return Object.assign({}, state, { robots: action.payload, isPendidng:false})
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPendidng:false})
		default:
			return state;
	}
}