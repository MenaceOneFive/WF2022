import React from 'react';
import GoogleMapReact from 'google-map-react';
import Box from '@mui/material/Box';
import "./css/map.css"
import "./css/place.css"


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
  <Box className="detailMap" style={{ height: 480}}>
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

/**
 * 마커로 표현하고자 하는 데이터를 가져와 표현을 구성하는 컴포넌트, 마커를 실제로 작동시키며 
 * 지도를 조정하는 컴포넌트, 실제 지도로 표현하는 컴포넌트로 구성되어 있습니다.
 * 지도는 google map 을 사용하였으며 만약 지도가 restriced라고 뜨면 google map api 키 문제로 
 * 최상위 위치(package.json와 같은 위치)에 .env파일이 없다면 호연지기 팀인 
 * 1891048 배익현에게 연락주시면 다시 확인하여 올리겠습니다.
 */