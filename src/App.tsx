import React from 'react'
import Services from './components/Services/Services';
import TopBanner from './components/TopBanner/TopBanner';
import './App.css'
import TopNavigation from './components/TopNavigation/TopNavigation';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentActivities from './components/RecentActivities/RecentActivities';

function App() {
  return (
    <div className='App'>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentActivities />
    </div>
  );
}

export default App;