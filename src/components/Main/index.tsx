import React from 'react';

import { Container,Header,BackIcon,ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>
        <ProfileInfo>
          <strong>Bruno Shimura</strong>
          <span>292 Tweets</span>
        </ProfileInfo>
      </Header>
      {/* <ProfilePage/> */}
      {/* <ButtonMenu>
        <HomeIcon/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </ButtonMenu> */}
    </Container>
  );
}

export default Main;