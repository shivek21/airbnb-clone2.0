import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect } from 'react';
import { useRef } from 'react';
mapboxgl.accessToken = process.env.mapbox_key;

function Map({ searchResults }) {
    const mapContainer = useRef(null);
    const map = useRef(null);

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    



    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [coordinates[0].longitude, coordinates[0].latitude],
          zoom: 11,
        });
      });

    

        
    
    return (
      <>
        <div ref={mapContainer} className="h-[500px] w-full m-16" />
      </>
    );
    }

export default Map;