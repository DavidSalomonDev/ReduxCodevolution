import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import UserContainer from "./components/UserContainer";

// import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<UserContainer />
				{/* <ItemContainer cake />
				<ItemContainer />
				<hr />
				<CakeContainer />
				<HooksCakeContainer />
				<IceCreamContainer />
				<NewCakeContainer /> */}
			</div>
		</Provider>
	);
}

export default App;
