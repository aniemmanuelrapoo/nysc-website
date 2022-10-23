import * as React from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TermsAndCon from '../components/TermsAndCon/TermsAndCon';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface ITermsAndConPageProps {
}

const TermsAndConPage: React.FunctionComponent<ITermsAndConPageProps> = (props) => {
  React.useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <>
      <TopNavigation pageTitle="Terms And Condition" />
      <PageTop pageTitle="Terms And Condition" />
      <TermsAndCon />
      <Footer />
    </>
  );
};

export default TermsAndConPage;
