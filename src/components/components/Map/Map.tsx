import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useRef } from "react";

const MapboxExample: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  // Red/pink color palette
  const colors: string[] = [
    "#FF0000", // Red
    "#FF3366", // Rose
    "#FF6699", // Pink
    "#FF99CC", // Light pink
    "#CC0033", // Crimson
    "#990033", // Dark red
    "#FF0066", // Hot pink
    "#FF5050", // Coral red
  ];

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken =
      "pk.eyJ1IjoidHN1dTAwMDIiLCJhIjoiY20yNjZndnQ0MHk0bDJrb2p1Nmo1Yjk5eiJ9.Waw4blYbVdaixQJzXZtNog";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [133.7751, -25.2744],
      zoom: 3,
    });

    mapRef.current.on("load", () => {
      if (mapRef.current) {
        // Add source for Australia
        mapRef.current.addSource("australia-states", {
          type: "geojson",
          data: "https://raw.githubusercontent.com/tonywr71/GeoJson-Data/master/australian-states.json",
        });

        // Add each Australian state/territory with red/pink colors
        const states = [
          "New South Wales",
          "Victoria",
          "Queensland",
          "South Australia",
          "Western Australia",
          "Tasmania",
          "Northern Territory",
          "Australian Capital Territory",
        ];

        states.forEach((state, index) => {
          mapRef.current?.addLayer({
            id: `australia-${state}`,
            type: "fill",
            source: "australia-states",
            layout: {},
            paint: {
              "fill-color": colors[index % colors.length],
              "fill-opacity": 0.7,
              "fill-outline-color": "#000",
            },
            filter: ["==", "STATE_NAME", state],
          });
        });
      }
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div style={{ height: "100%" }} >
      <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }}></div>
    </div>
  );
};

export default MapboxExample;
