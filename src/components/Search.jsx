import { useState } from "react";
import arrowSvg from "../assets/images/icon-arrow.svg";

const Search = () => {
	const [location, setLocation] = useState({});

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const IP = e.target[0].value;
		const API = import.meta.env.VITE_IP_GEOLOCATION;

		try {
			const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API}&ipAddress=${IP}`);

			const data = await response.json();

			setLocation(data);
		} catch (e) {
			throw new Error("Sorry we could not get a response!");
		}
	};

	return (
		<>
			<form className="flex" onSubmit={onSubmitHandler}>
				<input
					type="text"
					placeholder="Search for any IP address or domain"
					className="py-4 rounded-l-xl pl-5 w-full placeholder:text-sm text-18 shadow"
				/>
				<button type="submit" className="bg-black rounded-r-xl p-5">
					<img src={arrowSvg} alt="confirm button" />
				</button>
			</form>
			{location.code === 422 && <p className="text-center py-5 text-xl text-white">{location.messages}</p>}
		</>
	);
};

export default Search;
