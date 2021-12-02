import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

const thunkMiddleware = thunk.default;

// Fetching data from a users database, any data-fetching will include a loading, data, and error keys
const initialState = {
	loading: false,
	users: [],
	error: "",
};

// Actions in strings constant
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action creators
const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};

const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};

const fetchUsersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};

// Reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
				error: "",
			};
		case FETCH_USERS_FAILURE:
			return {
				...state,
				loading: false,
				users: [],
				error: action.payload,
			};
	}
	return state;
};

// Action creator for fetching data

const fetchUsers = () => {
	return async function (dispatch) {
		dispatch(fetchUsersRequest);
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);
			const users = response.data.map((user) => user.username);
			dispatch(fetchUsersSuccess(users));
		} catch (err) {
			const error = err.message;
			dispatch(fetchUsersFailure(error));
		}
	};
};

// Create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Subcribe to the store
store.subscribe(() => console.log(store.getState()));

// Dispatch the fetched data
store.dispatch(fetchUsers());
