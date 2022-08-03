import React, { useState } from 'react';
import { Button, Input } from '../../components/General';
import { General } from '../../definitions';
import Logo from '../../assets/logo.png';
// import Logo from '../../assets';
import toast from 'react-hot-toast';
import {
  CenteredContainer,
  LinksContainer,
  Form,
  Header,
} from '../../styles/general';
import { login } from '../../services/api';
import { validateEmail, validateText } from '../../utils/validations';

const Login: React.FC = () => {
  const [email, setEmail] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateEmail(value),
  });
  const [password, setPassword] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'senha'),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(true);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setEmail({ ...email, value, invalidity });
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const { value } = event.target
    const invalidity = ''

    setPassword({ ...password, value, invalidity})
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      await login(email.value, password.value);
      // console.log('Resposta', response)

      toast.success('Logado com sucesso!');
      console.log('finish')
      // history.go(0);
    } catch (error) {
      throw error
    }
  };

  return (
    <CenteredContainer onSubmit={handleSubmit}>
      <img src={Logo} alt="Logo da Loved Ped" />
      <Header>
        Acesse sua conta e comece a administrar sua creche de PETs!
      </Header>
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
          onChange={handlePassword}
        />
        <Button text="Acessar" typeButton="submit" isLoading={isLoading} />
      </Form>
    </CenteredContainer>
  );
};

export default Login;
