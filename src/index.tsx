import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import BaseRouter from './router';


import {enthusiasm} from './test/reducer'
const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseRouter>
        <App />
      </BaseRouter>
    </BrowserRouter>
    </Provider>
,
  document.getElementById('root') as HTMLElement
);

// import Hello from './test/Hello';
// ReactDOM.render(
//   <Provider store={store}>
//     <Hello />
//   </Provider>,
//   document.getElementById('root') as HTMLElement
// );
registerServiceWorker();
