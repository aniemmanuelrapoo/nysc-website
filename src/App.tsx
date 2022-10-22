import React from 'react'
import './App.css'
import './asset/css/custom.css'
import './asset/css/bootstrap.min.css'
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className='App'>
      <AppRouter />
    </div>
  );
}

export default App;