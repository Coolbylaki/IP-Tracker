import { useState } from "react";
import arrowSvg from "/images/icon-arrow.svg";

const Search = (props) => {
	const [location, setLocation] = useState({});

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const IP = e.target[0].value;
		const API = import.meta.env.VITE_IP_GEOLOCATION;

		try {
			const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API}&ipAddress=${IP}`);

			const data = await response.json();

			setLocation(data);

			const locationData = {
				coords: [data.location.lat, data.location.lng],
				IP,
				location: data.location.city,
				country: data.location.country,
				zip: data.location.postalCode,
				isp: data.isp,
				timezone: data.location.timezone,
			};
			props.locationHandler(locationData);
		} catch (e) {
			throw new Error("Sorry we could not get a response!");
		}
	};

	return (
		<>
			<form className="flex" onSubmit={onSubmitHandler}>
				<input
					type="text"
					placeholder="Search for any IP address"
					className="py-4 rounded-l-xl pl-5 w-full placeholder:text-sm text-18 shadow"
				/>
				<button type="submit" className="bg-black rounded-r-xl p-5">
					<img src={arrowSvg} alt="confirm button" />
				</button>
			</form>
			{location.code === 422 && <p className="text-center pt-5 text-xl text-white font-bold">{location.messages}</p>}
		</>
	);
};

export default Search;
