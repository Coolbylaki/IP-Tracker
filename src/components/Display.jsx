const Display = (props) => {
	return (
		<div className="flex justify-center">
			<section className="text-black text-center bg-white p-5 rounded-xl absolute mt-7 w-[85%]">
				<div className="mb-4">
					<p className="text-xs text-darkGray tracking-wider mb-1">IP ADDRESS</p>
					<p className="text-xl font-bold">{props.location.IP}</p>
				</div>
				<div className="mb-4">
					<p className="text-xs text-darkGray tracking-wider mb-1">LOCATION</p>
					<p className="text-xl font-bold">
						{props.location.location
							? `${props.location.location}, ${props.location.country} ${props.location.zip}`
							: ""}
					</p>
				</div>
				<div className="mb-4">
					<p className="text-xs text-darkGray tracking-wider mb-1">TIMEZONE</p>
					<p className="text-xl font-bold">{props.location.timezone ? `UTC ${props.location.timezone}` : ""}</p>
				</div>
				<div>
					<p className="text-xs text-darkGray tracking-wider mb-1">ISP</p>
					<p className="text-xl font-bold">{props.location.isp}</p>
				</div>
			</section>
		</div>
	);
};

export default Display;
