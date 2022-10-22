import React,{Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Router/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
