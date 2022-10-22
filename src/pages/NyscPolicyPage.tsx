import * as React from 'react';
import Footer from '../components/Footer/Footer';
import NyscPolicy from '../components/NyscPolicy/NyscPolicy';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface INyscPolicyPageProps {
}

const NyscPolicyPage: React.FunctionComponent<INyscPolicyPageProps> = (props) => {
  return (
    <>
      <TopNavigation pageTitle="NYSC Policy" />
      <PageTop pageTitle="NYSC Policy" />
      <NyscPolicy />
      <Footer />
    </>
  );
};

export default NyscPolicyPage;
