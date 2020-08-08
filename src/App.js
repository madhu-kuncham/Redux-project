import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeCointainer from './Components/CakeCointainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        {/* <IceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
