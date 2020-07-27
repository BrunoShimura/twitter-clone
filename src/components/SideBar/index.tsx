import React from 'react';
import { Search } from '../../styles/Icons';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon/>
      </SearchWrapper>
      <Body>
        <p>{'Lorem ipsum dolor sit amet.'.repeat(90)}</p>
      </Body>
    </Container>
  );
}

export default SideBar;