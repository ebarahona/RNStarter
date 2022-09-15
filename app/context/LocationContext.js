import React, {createContext, useEffect, useMemo, useState} from 'react';
import {Alert, Linking} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const locationAlert = () => {
  Alert.alert('Location!', 'You need to enable location for location stamp', [
    {
      text: 'Settings',
      onPress: () => Linking.openURL('app-settings:{2}'),
    },
  ]);
};

const GEO_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 10000,
  distanceFilter: 200,
  useSignificantChanges: true,
};

const LocationContext = createContext();

const LocationProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);

  const geoSuccess = pos => {
    setLocation(pos.coords);
    setLoading(false);
  };
  const geoError = err => {
    console.warn('geolocation position error: ', err);
    Geolocation.requestAuthorization();
    locationAlert();
    setLoading(false);
  };
  const getLocation = async () => {
    setLoading(true);
    Geolocation.getCurrentPosition(geoSuccess, geoError, GEO_OPTIONS);
  };

  const value = useMemo(
    () => ({
      loading,
      location,
      getLocation,
      setLocation,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, location],
  );

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      geoSuccess,
      geoError,
      GEO_OPTIONS,
    );
    return () => Geolocation.clearWatch(watchId);
  }, []);

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export {LocationProvider};

export default LocationContext;
