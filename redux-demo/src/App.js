import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<ItemContainer cake />
				<ItemContainer />
				<hr />
				<CakeContainer />
				<HooksCakeContainer />
				<IceCreamContainer />
				<NewCakeContainer />
			</div>
		</Provider>
	);
}

export default App;
