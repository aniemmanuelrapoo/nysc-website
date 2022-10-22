import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import ActivitiesPage from '../pages/ActivitiesPage';
import AllCoursesPage from '../pages/AllCoursesPage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';

interface IAppRouterProps {
}

const AppRouter: React.FunctionComponent<IAppRouterProps> = (props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="services" element={<AllServicePage />}/>
        <Route path="lectures" element={<AllCoursesPage />}/>
        <Route path="activities" element={<ActivitiesPage />}/>
        <Route path="contact" element={<ContactPage/>}/>
        {/* <Route path="profile" element={<ProfilePage/>}/> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </>
  );
};

export default AppRouter;
