import Search from "./components/Search";
import Display from "./components/Display";
import Map from "./components/Map";
import { useState } from "react";

function App() {
	const [coordinates, setCoordinates] = useState([51.505, -0.09]);
	const [locationData, setLocationData] = useState({});

	const locationDataHandler = (locationData) => {
		setCoordinates(locationData.coords);
		setLocationData(locationData);
	};

	return (
		<>
			<section className="bg-mobile-pattern md:bg-desktop-pattern bg-cover px-6 h-[35%]">
				<h1 className="text-2xl text-white font-medium text-center py-7 md:text-3xl">IP Address Tracker</h1>
				<Search locationHandler={locationDataHandler} />
				{locationData.IP && <Display location={locationData} />}
			</section>
			<Map coords={coordinates} />
		</>
	);
}

export default App;
