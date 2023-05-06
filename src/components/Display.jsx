const Display = (props) => {
	return (
		<>
			<section className="text-black text-center bg-white p-5 rounded-xl absolute z-10">
				<div className="mb-4">
					<p className="text-xs text-darkGray tracking-wider mb-1">IP ADDRESS</p>
					<p className="text-3xl font-bold">{props.location.IP}</p>
				</div>
				<div className="mb-4">
					<p className="text-xs text-darkGray tracking-wider mb-1">LOCATION</p>
					<p className="text-3xl font-bold">
						{props.location.location}, {props.location.country} {props.location.zip}
					</p>
				</div>
				<div className="mb-4">
					<p className="text-xs text-darkGray tracking-wider mb-1">TIMEZONE</p>
					<p className="text-3xl font-bold">UTC {props.location.timezone}</p>
				</div>
				<div>
					<p className="text-xs text-darkGray tracking-wider mb-1">ISP</p>
					<p className="text-3xl font-bold">{props.location.isp}</p>
				</div>
			</section>
		</>
	);
};

export default Display;
