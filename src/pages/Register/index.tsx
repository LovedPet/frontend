import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import { validateEmail, validateText} from '../../utils/validations';
import { CenteredContainer, Form, Header } from '../../styles/general';
import { Button, Input } from '../../components/General';
import Logo from '../../assets/logo.png';
import { General } from '../../definitions';
import { register } from '../../services/api';

const Register: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateEmail(value),
  });
  const [password, setPassword] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'senha'),
  });

  const [name, setName] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'nome'),
  });

  const [isLoading, setIsLoading] = useState(false);

  const [validated, setValidated] = useState(true);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);

    setIsLoading(true);
    try {
      console.log('Realiza chamada na API.');
      const data = {
        email: email.value,
        password: password.value,
        name_nursery: name.value
      }
      const response = await register(data)
      console.log('Deu bom >', response)
      toast.success('Cadastrado com sucesso!');
      history.push('/login');
    } catch (error) {
      toast.error('Falha ao realizar o cadastro, tente um email diferente!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = email.validation(value);

    setEmail({ ...email, value, invalidity });
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = password.validation(value);

    setPassword({ ...password, value, invalidity });
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = name.validation(value);

    setName({ ...name, value, invalidity });
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
            onChange={handlePassword}
          />
          <Input
            entity={name}
            label="Nome da Creche"
            type="text"
            validated={validated}
            placeholder="Digite o nome da creche"
            onChange={handleName}
          />
          <Button text="Cadastrar" typeButton="submit" isLoading={isLoading} />
        </Form>
      </CenteredContainer>
    </>
  );
};

export default Register;
