import * as React from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import ProfileSec from '../components/ProfileSec/ProfileSec';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface IProfilePageProps {
}

const ProfilePage: React.FunctionComponent<IProfilePageProps> = (props) => {
  React.useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <>
      <TopNavigation pageTitle="User Profile" />
      <PageTop pageTitle="User Profile" />
      <ProfileSec />
      <Footer />
    </>
  );
};

export default ProfilePage;
