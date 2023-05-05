import arrowSvg from "../assets/images/icon-arrow.svg";

const Search = () => {
	return (
		<form action="" className="flex">
			<input
				type="text"
				placeholder="Search for any IP address or domain"
				className="py-4 rounded-l-xl pl-5 w-full placeholder:text-sm"
			/>
			<button className="bg-black rounded-r-xl p-5">
				<img src={arrowSvg} alt="confirm button" />
			</button>
		</form>
	);
};

export default Search;
