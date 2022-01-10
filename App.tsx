import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store/index';
import AppWrapped from './screens/AppWrapped';

function App() {
  return (
    <Provider store={store}>
      <AppWrapped />
    </Provider>
  );
}
export default App;
