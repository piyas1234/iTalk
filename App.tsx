import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/global/Redux/store/store';
import Main from './src/Main';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Main/>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
