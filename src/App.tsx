import React from 'react'
import Services from './components/Services/Services';
import TopBanner from './components/TopBanner/TopBanner';
import './App.css'
import TopNavigation from './components/TopNavigation/TopNavigation';
import Analysis from './components/Analysis/Analysis';

function App() {
  return (
    <div className='App'>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
    </div>
  );
}

export default App;