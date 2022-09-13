import React from 'react';
import {Appearance} from 'react-native';
import Navigator from '@navigation';
import {GlobalBottomModal, GlobalToast} from '@components';
import {StoreProvider} from '@context';
import {Theme} from '@theme';
const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  // Use dark color scheme
  console.log('dark theme detected');
}

const App = () => {
  return (
    <StoreProvider>
      <Navigator />
      <GlobalBottomModal />
      <GlobalToast />
    </StoreProvider>
  );
};

export default App;
