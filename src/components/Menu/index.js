import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import QRCode from 'react-native-qrcode';

import {
  Container,
  Code,
  Nav,
  NavItems,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 350],
          outputRange: [0, 1],
          extrapolate: 'clamp'
        })
      }}
    >
      <Code>
        <QRCode
          value="https://google.com.br"
          size={80}
          fgColor="#fff"
          bgColor="#8b10ae"
        />
      </Code>

      <Nav>
        <NavItems>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me Ajuda</NavText>
        </NavItems>
        <NavItems>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItems>
        <NavItems>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar Cartão</NavText>
        </NavItems>
        <NavItems>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do App</NavText>
        </NavItems>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
