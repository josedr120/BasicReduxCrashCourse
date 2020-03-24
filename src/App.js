import React from 'react';
import './App.css';
import { MDBRow } from 'mdbreact';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';

function App() {
   return (
      <Provider store={store}>
         <div className='App'>
            <br />
            <PostForm />
            <hr />
            <MDBRow>
               <Posts />
            </MDBRow>
         </div>
      </Provider>
   );
}

export default App;
