import React from 'react'
import './App.css'
import './asset/css/custom.css'
import './asset/css/bootstrap.min.css'
import AboutPage from './pages/AboutPage';
import AllCoursesPage from './pages/AllCoursesPage';

function App() {
  return (
    <div className='App'>
      <AllCoursesPage />
    </div>
  );
}

export default App;