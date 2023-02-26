import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './i18n/configs'
import { Provider } from 'react-redux';
import rootStore from './redux/store';
import axios from 'axios'
import { PersistGate } from 'redux-persist/integration/react';
axios.defaults.headers['x-icode'] = '51143749FE2B32E3'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate loading={null} persistor={rootStore.persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
