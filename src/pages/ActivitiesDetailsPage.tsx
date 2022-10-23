import * as React from 'react';
import ActivitiesDetails from '../components/ActivitiesDetails/ActivitiesDetails';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface IActivitiesDetailsPageProps {
}

const ActivitiesDetailsPage: React.FunctionComponent<IActivitiesDetailsPageProps> = (props) => {
  React.useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <>
      <TopNavigation pageTitle="Activity Details" />
      <PageTop pageTitle="Activity Details" />
      <ActivitiesDetails />
      <Footer />
    </>
  );
};

export default ActivitiesDetailsPage;
