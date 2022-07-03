import React, { useState } from 'react';
import { Button, Input } from '../../components/General';
import {
  CenteredContainer,
  LinksContainer,
  Form,
  Header
} from '../../styles/general';

const Login: React.FC = () => {
  const [email, setEmail] = useState('email@mail.com')
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CenteredContainer>
      <Header> Acesse sua conta no LovedPet</Header>
      <Form>
        {/* <Input type="email" placeholder="Digite seu e-mail"/> */}
        <Button text="Acessar" typeButton="submit" isLoading={isLoading} />
      </Form>
    </CenteredContainer>

  )
};

export default Login;
