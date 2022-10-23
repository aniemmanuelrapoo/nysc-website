import * as React from 'react';
import ContactSec from '../components/ContactSec/ContactSec';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface IContactPageProps {
}

const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {
  React.useEffect(() => {
    window.scroll(0,0)
  }, [])
  return(
    <>
      <TopNavigation pageTitle="Contact Us" />
      <PageTop pageTitle="Contact Us" />
      <ContactSec />
      <Footer />
    </>
  ) ;
};

export default ContactPage;
