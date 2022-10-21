import React from 'react'
import Services from './components/Services/Services';
import TopBanner from './components/TopBanner/TopBanner';
import './App.css'
import TopNavigation from './components/TopNavigation/TopNavigation';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentActivities from './components/RecentActivities/RecentActivities';
import Courses from './components/Courses/Courses';
import Videos from './components/Videos/Videos';
import Reviews from './components/Reviews/Reviews';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className='App'>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentActivities />
      <Courses />
      <Videos />
      <Reviews />
      <AboutMe />
      <Services />
    </div>
  );
}

export default App;