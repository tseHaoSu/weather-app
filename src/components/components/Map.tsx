import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  // Add proper TypeScript types
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    // Set access token
    mapboxgl.accessToken =
      "pk.eyJ1IjoidHN1dTAwMDIiLCJhIjoiY20yNjZndnQ0MHk0bDJrb2p1Nmo1Yjk5eiJ9.Waw4blYbVdaixQJzXZtNog";

    // Only initialize if mapRef is not already initialized and container exists
    if (!mapRef.current && mapContainerRef.current) {
      // Initialize map
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12", // Add a style
        center: [133.7751, -25.2744], // starting position [lng, lat]
        zoom: 3, // starting zoom
      });
    }

    // Cleanup function to remove map on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []); // Empty dependency array to run only once

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full rounded-xl overflow-hidden shadow-md map-container"
    />
  );
};

export default Map;
