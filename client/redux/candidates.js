import axios from 'axios';

const GET_ALL_CANDIDATES = 'GET_ALL_CANDIDATE';
const CREATE_CANDIDATE = 'CREATE_CANDIDATE';
const DELETE_CANDIDATE = 'DELETE_CANDIDATE';
const UPDATE_CANDIDATE = 'UPDATE_CANDIDATE';

export const setCandidates = (candidates) => {
	return {
		type: GET_ALL_CANDIDATES,
		candidates,
	};
};

const _createCandidate = (candidate) => {
	return {
		type: CREATE_CANDIDATE,
		candidate,
	};
};

const updateCandidate = (candidate) => {
	return {
		type: UPDATE_CANDIDATE,
		candidate,
	};
};

const deleteCandidate = (candidate) => {
	return {
		type: DELETE_CANDIDATE,
		candidate,
	};
};

export const fetchCandidates = () => {
	return async (dispatch) => {
		const { data } = await axios.get('/api/candidate');
		console.log(data)
		dispatch(setCandidates(data));
	};
};

export const createCandidate = (candidate, history) => {
	return async (dispatch) => {
		const { data: created } = await axios.post('/api/candidate', candidate);
		dispatch(_createCandidate(created));
		history.push('/');
	};
};

export const updateACandidate = (candidate, history) => {
	return async (dispatch) => {
		const { data: updated } = await axios.put(
			`/api/candidate/${candidate.id}`,
			candidate
		);
		dispatch(updateCandidate(updated));
		history.push('/');
	};
};

export const deleteACandidate = (id, history) => {
	return async (dispatch) => {
		const { data: candidate } = await axios.delete(`/api/candidate/${id}`);
		dispatch(deleteCandidate(candidate));
		history.push('/');
	};
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

const candidatesReducer = (state = [], action) => {
	switch (action.type) {
		case GET_ALL_CANDIDATES:
			return action.candidates;
		case CREATE_CANDIDATE:
			return [...state, action.candidate];
		case UPDATE_CANDIDATE:
			return state.map((candidate) =>
				candidate.id === action.candidate.id ? action.candidate : candidate
			);
		case DELETE_CANDIDATE:
			return state.filter((candidate) => candidate.id !== action.candidate.id);
		default:
			return state;
	}
};

export default candidatesReducer;
