import {
	InfoBoxF,
	InfoWindowF,
	Marker,
	MarkerF,
	OverlayView,
	Rectangle,
} from "@react-google-maps/api";
import React, { useState } from "react";
import PropertyCard from "../PropertyCard";

function MarkerItem({ item, handleMarkerClick }) {
	const [selected, setSelected] = useState(null);
	const showBanner = () => {
		if (selected === item._id) {
			setSelected(null);
		} else {
			setSelected(item._id);
		}
		handleMarkerClick(item);
	};
	return (
		<div>
			{selected === item._id && (
				<OverlayView
					position={{
						lat: parseFloat(item.Latitude),
						lng: parseFloat(item.Longitude),
					}}
					mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
					<PropertyCard property={item} />
				</OverlayView>
			)}
			<MarkerF
				key={item.id}
				position={{
					lat: parseFloat(item.Latitude),
					lng: parseFloat(item.Longitude),
				}}
				onClick={() => showBanner()}
			/>
		</div>
	);
}

export default MarkerItem;
