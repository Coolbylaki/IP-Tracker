import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = () => {
	return (
		<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="h-[65%] w-screen">
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[51.505, -0.09]} />
		</MapContainer>
	);
};

export default Map;
