import Search from "./components/Search";
import Display from "./components/Display";
import Map from "./components/Map";

function App() {
	return (
		<>
			<section className="bg-mobile-pattern bg-cover px-6 h-[35%]">
				<h1 className="text-2xl text-white font-medium text-center py-7">IP Address Tracker</h1>
				<Search />
			</section>
			<Map />
		</>
	);
}

export default App;
