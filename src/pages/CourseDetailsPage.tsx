import * as React from 'react';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface ICourseDetailsPageProps {
}

const CourseDetailsPage: React.FunctionComponent<ICourseDetailsPageProps> = (props) => {
  React.useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <>
      <TopNavigation pageTitle="Lecture Details" />
      <PageTop pageTitle="Lecture Details" />
      <CourseDetails />
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
