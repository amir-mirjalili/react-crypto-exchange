import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';

import Profile from '../../components/Widgets/Profile/Profile';
import MyAssets from '../../components/Widgets/MyAssets/MyAssets';

const ProfileScreen = () => (
  <SiteLayout>
    <Header icon='sort' title='Profile' />
    <div className='flex flex-destroy'>
      <div className='content-30 box-right-padding'>
        <Profile />
      </div>
      <div className='content-70 flex-1'>
        <MyAssets />
      </div>
    </div>
  </SiteLayout>
);

export default ProfileScreen;
