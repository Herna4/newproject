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
// import { firebaseAuthIsReady } from 'react-redux-firebase'


const store=createStore(
  RootReducer,
  //firebase and firestore setting process with thunk merge
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
  reduxFirestore(fbConfig),
  //Activate the firebase standby feature.
  // reactReduxFirebase(fbConfig,{attachAuthIsReady:true})
  
  )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users',
  useFirestoreForProfile:true,
  firebaseAuthIsReady: true,
  attachAuthIsReady: true, // attaches auth is ready promise to store
  firebaseStateName: 'firebase'
}

//if the page firebaseIsReady property succeeds do render
// firebaseAuthIsReady(store, 'firebase').then(()=>{
    //In store attribute, we place the store that we created.
   ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
  , document.getElementById('root'));
    serviceWorker.unregister();
// })



// const config = {
//   useFirestoreForProfile:true,
//   attachAuthIsReady: true, // attaches auth is ready promise to store
//   firebaseStateName: 'firebase'
// }

// const initialState = {};
// const store = createStore(RootReducer,initialState,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//         // reactReduxFirebase(firebase, config),
//         reduxFirestore(firebase)
//     )
// )

// store.firebaseAuthIsReady.then(() => {
//     const rrfProps = {
//         firebase,
//         config: fbConfig,
//         dispatch: store.dispatch,
//         createFirestoreInstance
//     }

// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <App />
//     </ReactReduxFirebaseProvider>
//   </Provider>
//   , document.getElementById('root'));
//     serviceWorker.unregister();
// })


























// const store = createStore(
//        RootReducer,
//        compose(
//           applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//             reduxFirestore(fbConfig),
//             // reactReduxFirebase(fbConfig)
//      ) 
// );  

// const rrfProps = {
//    firebase,
//    config: fbConfig,
//    dispatch: store.dispatch,
//    createFirestoreInstance, // <- needed if using firestore
//    attachAuthIsReady: true
//   }

// // store.firebaseAuthReady.then(() => {
//   ReactDOM.render(
//     <Provider store={store}>
//         <ReactReduxFirebaseProvider {...rrfProps}>
//         <App />
//     </ReactReduxFirebaseProvider>
//     </Provider>
//    , document.getElementById('root'));

// serviceWorker.unregister();

// })  

