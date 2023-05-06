import Search from "./components/Search";
import Display from "./components/Display";
import Map from "./components/Map";
import { useState } from "react";

function App() {
	const [coordinates, setCoordinates] = useState([51.505, -0.09]);

	const locationDataHandler = (locationData) => {
		setCoordinates(locationData);
	};

	return (
		<>
			<section className="bg-mobile-pattern bg-cover px-6 h-[35%]">
				<h1 className="text-2xl text-white font-medium text-center py-7">IP Address Tracker</h1>
				<Search locationHandler={locationDataHandler} />
			</section>
			<Map coords={coordinates} />
		</>
	);
}

export default App;
