import React from 'react';

import { Container, Top, Logo, Title } from './styles';
import logo from '~/assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Marcos Taron</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
