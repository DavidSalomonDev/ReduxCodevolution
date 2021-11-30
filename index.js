import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";

// importing library
const { createLogger } = reduxLogger;
const logger = createLogger();

// Actions have to be declared in a string constant
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creator, returns an action
function buyCake() {
	// Action with the type property
	return {
		type: BUY_CAKE,
		info: "First redux action",
	};
}

function buyIceCream() {
	return {
		type: BUY_ICECREAM,
		info: "Second redux action",
	};
}

// Reducer = (previousState, action) => newState

/**
 * This initialState will only work for a few states, it's better to create one initial state * and one reducer for each state. At the end we will have multiple reducers and states
 */
/*
// Default state as a single object
const initialState = {
	numOfCakes: 10,
	numOfIceCreams: 20,
};

// Reducer function
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};

		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
			};
		default:
			return state;
	}
};

*/

// Multiple reducers
const initialCakeState = {
	numOfCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};

		default:
			return state;
	}
};

const initialIceCreamState = {
	numOfIceCreams: 20,
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
			};

		default:
			return state;
	}
};

//Redux Store Responsibilitites

// Working with multiple reducers
const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

// 1. Holds the application state
const store = createStore(rootReducer, applyMiddleware(logger));

// 2. Allows access to state via getState()
console.log("Initial state: ", store.getState());

// 3. Registers listener via subscribe(listener)
const unsubscribe = store.subscribe(
	() => {}
	// Using middleware to log state
	//console.log("Updated state: ", store.getState())
);

// 4. Dispatch method to update state, accepts an action as parameter
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// 5. Unsubscribe
unsubscribe();
