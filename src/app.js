import React from 'react';
import { Provider } from 'react-redux';

import TodoScreen from './screens/to-do/to-do'
import store from './store';

const App = () => (
  <Provider store={store}>
    <TodoScreen />
  </Provider>
);

export default App;