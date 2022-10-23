import * as React from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface IAllCoursesPageProps {
}

const AllCoursesPage: React.FunctionComponent<IAllCoursesPageProps> = (props) => {
  React.useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <>
      <TopNavigation pageTitle="All Lectures" />
      <PageTop pageTitle="All Lectures" />
      <AllCourses />
      <Footer />
    </>
  );
};

export default AllCoursesPage;
