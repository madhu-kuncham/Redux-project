import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeCointainer from './Components/CakeCointainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeCointainer />
      </div>
    </Provider>
  );
}

export default App;
