import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRef, useEffect } from "react";

const Map = (props) => {
	const mapRef = useRef(null);

	useEffect(() => {
		if (mapRef.current) {
			const map = mapRef.current;
			map.setView(props.coords, 13);
		}
	}, [props.coords]);

	return (
		<MapContainer ref={mapRef} center={props.coords} zoom={10} scrollWheelZoom={true} className="h-[65%] w-screen">
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={props.coords} />
		</MapContainer>
	);
};

export default Map;
