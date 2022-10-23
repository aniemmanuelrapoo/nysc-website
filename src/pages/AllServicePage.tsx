import * as React from 'react';
import ContactSec from '../components/ContactSec/ContactSec';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface IAllServicePageProps {
}

const AllServicePage: React.FunctionComponent<IAllServicePageProps> = (props) => {
  React.useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <>
      <TopNavigation pageTitle="Our Services" />
      <PageTop pageTitle="Our Services" />
      <Services />
      <ContactSec />
      <Footer />
    </>
  );
};

export default AllServicePage;
