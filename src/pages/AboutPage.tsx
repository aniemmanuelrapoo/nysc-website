import * as React from 'react';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface IAboutPageProps {
}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <>
      <TopNavigation />
      <PageTop pageTitle="About Us" />
      <AboutMe />
      <AboutDescription />
      <Footer />
    </>
  );
};

export default AboutPage;
