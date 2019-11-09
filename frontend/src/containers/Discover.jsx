import React from 'react';
import { SongList } from '../components/SongElements/SongList';
// import TabsHeader from '../components/TabsHeader';
// import '../assets/styles/Discover.scss';
import { MusicPlayer } from '../components/MusicPlayer/MusicPlayer';
import songs from '../utils/mocks/songs';
import { GlobalStyle } from '../GlobalStyles';
import MobileHeader from '../components/Header/MobileHeader';

const Discover = () => (
  <>
    <div className='tabs'>
      {/* <TabsHeader /> */}
      <GlobalStyle />
      <MobileHeader title='DISCOVER' />
      <SongList songs={songs} onChange='' />
      <MusicPlayer />
    </div>
  </>
);

export default Discover;
