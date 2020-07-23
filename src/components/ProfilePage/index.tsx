import React from 'react';

import Feed from '../Feed';

import { Container,Banner,Avatar,ProfileData,LocationIcon,CakeIcon,Followage,EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/> 
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Bruno Anthony Shimura</h1>
        <h2>@brunoshimura</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>
        <ul>
          <li>
            <LocationIcon/>
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 04 de Agosto de 2000
          </li>
        </ul>
        <Followage>
          <span>
            Seguindo <strong>109</strong>
          </span>
          <span>
          <strong>12 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed/>
    </Container>
  );
}

export default ProfilePage;