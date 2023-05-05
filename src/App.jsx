import Search from "./components/Search";
import Display from "./components/Display";

function App() {
	return (
		<>
			<section className="bg-mobile-pattern bg-cover px-6">
				<h1 className="text-2xl text-white font-rubik font-medium text-center py-6">IP Address Tracker</h1>
				<Search />
			</section>
		</>
	);
}

export default App;
