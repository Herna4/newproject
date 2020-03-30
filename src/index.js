import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from './reducers/RootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import firebase from 'firebase'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig';

const store = createStore(
       RootReducer,
       compose(
          applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
            reduxFirestore(fbConfig),
            // reactReduxFirebase(fbConfig)
     ) 
);  

const rrfProps = {
   firebase,
   config: fbConfig,
   dispatch: store.dispatch,
   createFirestoreInstance, // <- needed if using firestore
   attachAuthIsReady: true
  }

// store.firebaseAuthReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
    </Provider>
   , document.getElementById('root'));

serviceWorker.unregister();

// })  

