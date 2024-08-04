"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Geocoder } from "@mapbox/search-js-react";

export default function Map({ address }: { address: string }) {
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
  useEffect(() => {
    mapboxgl.accessToken = accessToken;

    mapInstanceRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-74.5, 40],
      zoom: 12,
    });

    mapInstanceRef.current.on("load", () => {
      setMapLoaded(true);
    });
  }, []);

  return (
    <>
      <Geocoder
        accessToken={accessToken}
        map={mapInstanceRef.current}
        mapboxgl={mapboxgl}
        value={address}
        onChange={(d) => {
          setInputValue(d);
        }}
        marker
      />
      <div
        style={{ height: 340 }}
        ref={mapContainerRef}
        className="map-container max-h-[420px] min-w-full max-w-full rounded-lg
        border-2 lg:max-w-[470px]"
      ></div>
    </>
  );
}
