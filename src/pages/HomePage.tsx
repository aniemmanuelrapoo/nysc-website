import * as React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Analysis from '../components/Analysis/Analysis';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';
import RecentActivities from '../components/RecentActivities/RecentActivities';
import Reviews from '../components/Reviews/Reviews';
import Services from '../components/Services/Services';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Videos from '../components/Videos/Videos';
import Welcome from '../components/Welcome/Welcome';

interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  React.useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <>
      <TopNavigation pageTitle="NYSC Camp Activities" />
      <TopBanner />
      <Welcome />
      <Services />
      <Analysis />
      <Summary />
      <RecentActivities />
      <Courses />
      <Videos />
      <Reviews />
      <AboutMe />
      <Footer />
    </>
  );
};

export default HomePage;
