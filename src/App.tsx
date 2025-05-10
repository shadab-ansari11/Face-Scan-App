/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @format
 */
import * as React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import * as Sentry from '@sentry/react-native';
import {useAppTheme} from './theme';
import NavContainer from '../src/navigation';
import Toast from 'react-native-toast-message';
import AppProviders from './AppProvider';
import {store} from '../src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore, persistReducer} from 'redux-persist';
let persist = persistStore(store);

function SubApp() {
  const theme = useAppTheme();

  return (
    <>
      <NativeBaseProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persist}>
              <NavContainer />
          </PersistGate>
        </Provider>
      </NativeBaseProvider>
      <Toast />
    </>
  );
}

function App() {
  return (
    <AppProviders>
      <SubApp />
    </AppProviders>
  );
}

export default Sentry.wrap(App);
