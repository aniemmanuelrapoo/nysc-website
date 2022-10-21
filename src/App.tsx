import React from 'react'
import './App.css'
import PageTop from './components/PageTop/PageTop';
import HomePage from './pages/HomePage';
import './asset/css/custom.css'
import './asset/css/bootstrap.min.css'
import TopNavigation from './components/TopNavigation/TopNavigation';

function App() {
  return (
    <div className='App'>
      <TopNavigation />
      <PageTop pageTitle="About Us" />
    </div>
  );
}

export default App;