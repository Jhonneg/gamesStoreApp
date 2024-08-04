// "use client";
// import { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import useTrackLocation from "@/hooks/use-track-location";

// export default function Map() {
//   const { longLat, handleTrackLocation } = useTrackLocation();
//   const [longitude, latitude] = longLat.split(",");
//   const mapContainerRef = useRef();
//   const mapRef = useRef();

//   useEffect(() => {
//     handleTrackLocation();
//     mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;

//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       center: [-46.6141, -23.6955],
//       zoom: 15,
//     });
//   }, []);

//   return (
//     <div
//       style={{
//         height: 360,
//         width: 480,
//       }}
//       ref={mapContainerRef}
//       className="map-container max-h-[420px] min-w-full max-w-full rounded-lg border-2 lg:max-w-[470px]"
//     />
//   );
// }
