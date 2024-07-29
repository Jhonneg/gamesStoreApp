"use client";

import { use, useState } from "react";

type PositionType = {
  coords: { latitude: number; longitude: number };
};

export default function useTrackLocation() {
  const [isFindingLocation, setisFindingLocation] = useState(false);
  const [longLat, setLongLat] = useState("");
  const [locationErrorMsg, setLocationErrorMsg] = useState("");

  function success(position: PositionType) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLongLat(`${longitude},${latitude}`);
    setisFindingLocation(false);
    setLocationErrorMsg("");
    console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
  }

  function error() {
    setisFindingLocation(false);
    setLocationErrorMsg("Unable to retrieve your location");
    console.error("Unable to retrieve your location");
  }

  function handleTrackLocation() {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      setLocationErrorMsg("Geolocation is not supported by your browser");
    } else {
      console.log("Locating…");
      setisFindingLocation(true);
      setLocationErrorMsg("");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  return {
    longLat,
    handleTrackLocation,
    isFindingLocation,
    locationErrorMsg,
  };
}
