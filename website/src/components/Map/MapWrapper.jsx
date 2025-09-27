import React, { useEffect, useMemo } from "react";
// import * as P from './parts';
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Map from './Map';

const MapWrapper = () => {
    // const center = useMemo(() => ({ lat: 54.5373, lng: 16.5389 }),[]);
    // const options = useMemo(() => ({ disableDefaultUI: true, clickableIcons: false, }),[]);
    // const {isLoaded} = useLoadScript({
    //     googleMapsApiKey: "AIzaSyA1BYUhIsRKPoRwXAElLa_MQJNd5Pe4pt4",
    // });
    // if(!isLoaded) return <div>Loading...</div>
  
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "" // Add your API key
    });
  
    return isLoaded ? <Map /> : null;
    // return (
    //   <GoogleMap
    //     zoom={16}
    //     center={{ lat: 54.5373, lng: 16.5389 }}
    //     mapContainerStyle={{ width: "100vw", height: "100vh" }}
    //   >
    //     <Marker position={{ lat: 54.5375, lng: 16.5391 }} />
    //   </GoogleMap>
    // );
};

export default MapWrapper;