import * as React from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface IPrivacyPolicyPageProps {
}

const PrivacyPolicyPage: React.FunctionComponent<IPrivacyPolicyPageProps> = (props) => {
  React.useEffect(() => {
    window.scroll(0,0)
  }, [])
  return(
    <>
      <TopNavigation pageTitle="Privacy And Policy" />
      <PageTop pageTitle="Privacy And Policy" />
      <PrivacyPolicy />
      <Footer />
    </>
  ) ;
};

export default PrivacyPolicyPage;
