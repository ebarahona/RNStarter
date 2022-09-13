import {useContext} from 'react';
import {StoreContext} from '@context';

export default () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error(
      'useStore: This hook must be used in a component wrapped within a `ContextProvider` component',
    );
  }
  return context;
};
