import * as React from 'react';
import AllActivities from '../components/AllActivities/AllActivities';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface IActivitiesPageProps {
}

const ActivitiesPage: React.FunctionComponent<IActivitiesPageProps> = (props) => {
  return(
    <>
      <TopNavigation />
      <PageTop pageTitle="All Activities" />
      <AllActivities />
      <Footer />
    </>
  ) ;
};

export default ActivitiesPage;
