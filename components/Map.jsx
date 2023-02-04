// 21.185,-88.755
// 4.31
// water: #f2d8ba
// motorways and trunks: #d9d1ce
// base: #034d4d

import { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
  // de/restructure searchResults to collection of coordinates
  const coords = searchResults.map((result) => {
    //
    return {
      longitude: result.long,
      latitude: result.lat,
    };
  });
  const centroid = getCenter(coords);

  // STATES
  const [currLoc, setCurrLoc] = useState({
    longitude: -97.7667,
    latitude: 30.2892,
  });
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: centroid.longitude,
    latitude: centroid.latitude,
    zoom: 11,
  });
  const [selectedLocation, setSelectedLocation] = useState({});

  // EFFECTS
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     //
  //     console.log(`pos: (${pos.coords.latitude}, ${pos.coords.longitude})`);
  //     //
  //     setCurrLoc({
  //       longitude: pos.coords.longitude,
  //       latitude: pos.coords.latitude,
  //     });
  //     console.log("current location: ", currLoc);
  //     //
  //     setViewport({
  //       width: '100%',
  //       height: '100%',
  //       latitude: pos.coords.latitude,
  //       longitude: pos.coords.longitude,
  //       center: [pos.coords.latitude, pos.coords.longitude],
  //       zoom: 4,
  //     });
  //     console.log(viewport);
  //   });
  // }, []);

  return (
    <ReactMapGL
      //   {...viewport}
      mapStyle="mapbox://styles/m4crus/cldnae29a004v01q9crc3fqk8"
      mapboxAccessToken={process.env.ACCESS_TOKEN}
      initialViewState={viewport}
      onViewportChange={
        ((nextViewport) => {
          setViewport(nextViewport);
        },
        () => console.log('error'))
      }
    >
      <Marker color="red" longitude={-97.7667} latitude={30.2892} />

      {/* {searchResults.map((result) => {
        console.log(result);
        return (
          <div key={result.long}>
            <Marker
              anchor="center"
              clickTolerance={1}
              color="#355c7d"
              draggable={false}
              scale={3.5}
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p className="cursor-pointer text-2xl animate-bounce">📌</p>
            </Marker>
          </div>
        );
      })} */}
    </ReactMapGL>
  );
}

export default Map;
