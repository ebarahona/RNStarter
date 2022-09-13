import React, {createContext, useEffect, useMemo, useState} from 'react';
import {MMKV} from 'react-native-mmkv';

const StoreContext = createContext();

const StoreProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({});
  const storage = new MMKV();

  const value = useMemo(
    () => ({
      settings,
      setSettings,
      loading,
      setLoading,
    }),
    [settings, loading],
  );

  useEffect(() => {}, []);

  return (
    <StoreContext.Provider value={{value, storage}}>
      {children}
    </StoreContext.Provider>
  );
};

export {StoreProvider};

export default StoreContext;
