import React, { useState } from 'react';
import { CenteredContainer, Form, Header } from '../../styles/general';
import { Button, Input } from '../../components/General'
import Logo from '../../assets/logo.png';
import { General } from '../../definitions';

const Register: React.FC = () => {
  const [email, setEmail] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });
  const [password, setPassword] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });

  const [name, setName] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });

  const [isLoading, setIsLoading] = useState(false)
  const [validated, setValidated] = useState(true);


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setEmail({ ...email, value, invalidity });
  };

  return (
    <>
      <CenteredContainer onSubmit={handleSubmit}>
        <img src={Logo} alt="Logo da Loved Ped" />
        <Header>Crie sua conta</Header>
        <Form>
          <Input
            entity={email}
            label="Email"
            type="email"
            validated={validated}
            placeholder="Digite seu e-mail"
            onChange={handleEmail}
          />
          <Input
            entity={password}
            label="Senha"
            type="password"
            validated={validated}
            placeholder="Digite sua senha"
            onChange={() => console.log('foda')}
          />
          <Input
            entity={name}
            label="Nome da Creche"
            type="text"
            validated={validated}
            placeholder="Digite o nome da creche"
            onChange={() => console.log('foda')}
          />
          <Button text="Cadastrar" typeButton="submit" isLoading={isLoading} />
        </Form>
      </CenteredContainer>
    </>
  );
};

export default Register;
