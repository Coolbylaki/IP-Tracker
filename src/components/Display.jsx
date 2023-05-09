const Display = (props) => {
	return (
		<div className="flex justify-center xl:mt-10">
			<section className="text-black text-center bg-white p-5 rounded-xl absolute mt-7 w-[85%] xl:max-w-[75%] xl:flex xl:justify-evenly xl:py-12">
				<div className="mb-4 xl:text-left">
					<p className="text-xs text-darkGray tracking-wider mb-1 xl:mb-5">IP ADDRESS</p>
					<p className="text-xl font-bold xl:text-3xl">{props.location.IP}</p>
				</div>
				<div className="mb-4 xl:text-left">
					<p className="text-xs text-darkGray tracking-wider mb-1 xl:mb-5">LOCATION</p>
					<p className="text-xl font-bold xl:text-3xl">
						{props.location.location
							? `${props.location.location}, ${props.location.country} ${props.location.zip}`
							: ""}
					</p>
				</div>
				<div className="mb-4 xl:text-left">
					<p className="text-xs text-darkGray tracking-wider mb-1 xl:mb-5">TIMEZONE</p>
					<p className="text-xl font-bold xl:text-3xl">
						{props.location.timezone ? `UTC ${props.location.timezone}` : ""}
					</p>
				</div>
				<div className="xl:text-left">
					<p className="text-xs text-darkGray tracking-wider mb-1 xl:mb-5">ISP</p>
					<p className="text-xl font-bold xl:text-3xl">{props.location.isp}</p>
				</div>
			</section>
		</div>
	);
};

export default Display;
