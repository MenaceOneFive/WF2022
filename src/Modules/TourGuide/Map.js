import React from 'react';
import GoogleMapReact from 'google-map-react';
import Box from '@mui/material/Box';

const getInfoWindowString = (place) => `
<div>
  <div style="font-size: 16px;">
    ${place.name}
  </div>
  <div style="font-size: 14px; color: grey;">
    ${place.semitype}
  </div>
</div>`;

const handleApiLoaded = (map, maps, places) => {
  const markers = [];
  const infowindows = [];

  places.forEach((place) => {
    markers.push(new maps.Marker({
      position: {
        lat: place.gps[0],
        lng: place.gps[1],
      },
      map,
    }));

    infowindows.push(new maps.InfoWindow({
      content: getInfoWindowString(place),
    }));
  });

  markers.forEach((marker, i) => {
    marker.addListener('click', () => {
      infowindows[i].open(map, marker);
    });
  });
};

export const Map = ({detail, markers}) => {

  const myAPIKEY = process.env.REACT_APP_GOOGLE_API_KEY;

  
  return (
  <Box className="detailMap" style={{ height: 480, width: 800 }}>
    <GoogleMapReact
      bootstrapURLKeys = {{ key: myAPIKEY }}
      defaultCenter={{lat: detail.gps[0], lng: detail.gps[1]}}
      defaultZoom={15}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, markers)}>
    </GoogleMapReact>
  </Box>
  )
}