import React, { useState } from 'react';
import { Button, Input } from '../../components/General';
import { General } from '../../definitions';
import {
  CenteredContainer,
  LinksContainer,
  Form,
  Header,
} from '../../styles/general';

const Login: React.FC = () => {
  const [email, setEmail] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CenteredContainer>
      <Header> Acesse sua conta no LovedPet</Header>
      <Form>
        <Input
          entity={email}
          label="Email"
          type="email"
          placeholder="Digite seu e-mail"
          onChange={() => console.log('foda')}
        />
        <Button text="Acessar" typeButton="submit" isLoading={isLoading} />
      </Form>
    </CenteredContainer>
  );
};

export default Login;
