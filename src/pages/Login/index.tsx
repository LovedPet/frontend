import React, { useState } from 'react';
import { Button, Input } from '../../components/General';
import { General } from '../../definitions';
import Logo from '../../assets/logo.png';
// import Logo from '../../assets';
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
  const [password, setPassword] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setEmail({ ...email, value, invalidity });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <CenteredContainer onSubmit={handleSubmit}>
      <img src={Logo} alt="Logo da Loved Ped" />
      <Header>Acesse sua conta e comece a administrar sua creche de PET's!</Header>
      <Form>
        <Input
          entity={email}
          label="Email"
          type="email"
          validated={true}
          placeholder="Digite seu e-mail"
          onChange={handleEmail}
        />
        <Input
          entity={password}
          label="Senha"
          type="password"
          validated={true}
          placeholder="Digite sua senha"
          onChange={() => console.log('foda')}
        />
        <Button text="Acessar" typeButton="submit" isLoading={isLoading} />
      </Form>
    </CenteredContainer>
  );
};

export default Login;
