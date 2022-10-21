import * as React from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface IAllCoursesPageProps {
}

const AllCoursesPage: React.FunctionComponent<IAllCoursesPageProps> = (props) => {
  return (
    <>
      <TopNavigation />
      <PageTop pageTitle="All Lectures" />
      <AllCourses />
      <Footer />
    </>
  );
};

export default AllCoursesPage;
