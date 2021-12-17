import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

// step 2 for redux 
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    ,
    document.getElementById('root')
);



// ReactDOM.render(<App />, document.getElementById('root'));




// ReactDOM.render( <App></App> , arg2);


// ReactDOM.render(
//   <App />
//   ,
//   document.getElementById('root')
// );

reportWebVitals();
