import React, {createContext, useEffect, useMemo, useState} from 'react';
import {DevSettings} from 'react-native';
import {MMKV} from 'react-native-mmkv';

const StoreContext = createContext();

const StoreProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({});
  const storage = new MMKV();
  console.log('store context');
  const value = useMemo(
    () => ({
      loading,
      settings,
      setLoading,
      setSettings,
    }),
    [settings, loading],
  );

  // First boot
  useEffect(() => {
    // Developer ONLY
    DevSettings.addMenuItem('Clear Local Storage', () => {
      storage.clearAll();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export {StoreProvider};

export default StoreContext;
