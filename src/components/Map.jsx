import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRef, useEffect } from "react";
import L from "leaflet";

const locationIcon = L.icon({
	iconUrl: "src/assets/icon-location.svg",
});

const Map = (props) => {
	const mapRef = useRef(null);

	useEffect(() => {
		if (mapRef.current) {
			const map = mapRef.current;
			map.setView(props.coords, 12);
		}
	}, [props.coords]);

	return (
		<MapContainer
			ref={mapRef}
			center={props.coords}
			zoom={9}
			scrollWheelZoom={false}
			doubleClickZoom={false}
			zoomControl={false}
			className="h-[65%] w-screen absolute -z-10">
			<TileLayer
				attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
				url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
				accessToken="pk.eyJ1IjoibGFraXllbHBjYW1wIiwiYSI6ImNsYnR1d3ZhdDEzc2YzdG50NDRocnptdXQifQ.doqEIbUWfZpqcHl7pAwXNQ"
				id="mapbox/streets-v11"
			/>

			<Marker position={props.coords} icon={locationIcon} />
		</MapContainer>
	);
};

export default Map;
