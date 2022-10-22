import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import ActivitiesDetailsPage from '../pages/ActivitiesDetailsPage';
import ActivitiesPage from '../pages/ActivitiesPage';
import AllCoursesPage from '../pages/AllCoursesPage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import NyscPolicyPage from '../pages/NyscPolicyPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import ProfilePage from '../pages/ProfilePage';
import TermsAndConPage from '../pages/TermsAndConPage';

interface IAppRouterProps {
}

const AppRouter: React.FunctionComponent<IAppRouterProps> = (props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="services" element={<AllServicePage />}/>
        <Route path="lectures" element={<AllCoursesPage />}/>
        <Route path="activities" element={<ActivitiesPage />}/>
        <Route path="activitiesdetails" element={<ActivitiesDetailsPage />}/>
        <Route path="contact" element={<ContactPage />}/>
        <Route path="profile" element={<ProfilePage />}/>
        <Route path="nyscpolicy" element={<NyscPolicyPage />}/>
        <Route path="termsandcondition" element={<TermsAndConPage />}/>
        <Route path="privacypolicy" element={<PrivacyPolicyPage />}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </>
  );
};

export default AppRouter;
