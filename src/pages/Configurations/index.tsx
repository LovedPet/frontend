import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import {
  CenteredContainer,
  Header,
  LinksContainer,
  Form,
} from '../../styles/general';
import {
  Button,
  Input,
} from '../../components/General';
import { General } from '../../definitions';
import { configurate } from '../../services/api';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';


const Configurations: React.FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(true);
  const [petLimits, setPetLimits] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: number) => value,
  });
  const [valueHour, setValueHour] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: number) => value,
  });
  const [scheduler, setScheduler] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: boolean) => value,
  });

  const handleLimits = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setPetLimits({ ...petLimits, value, invalidity });
  };

  const handleValueHour = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setValueHour({ ...valueHour, value, invalidity });
  };

  const handleScheduler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setScheduler({ ...scheduler, value, invalidity });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      await configurate({
        pet_limits: petLimits.value,
        value_hour: valueHour.value,
        scheduler_active: true
      })

      console.log('Printando, ', {
        pet_limits: petLimits.value,
        value_hour: valueHour.value,
        scheduler_active: scheduler.value
      })

      toast.success('Salvo com sucesso!');
      console.log('finish')
      history.push('/main');
    } catch (error) {
      throw error
    }
  };

  const _navigateToMenu = () => history.push('/main');

  return (
    <CenteredContainer onSubmit={handleSubmit}>
      <LinksContainer>
        <img src={Logo} alt="Logo da Loved Ped" />
      </LinksContainer>
      <Header>
        Bem vindo a configuração da sua creche de PETs!
      </Header>
        <Form>
          <Input
            entity={petLimits}
            label="Limite de pets por horário?"
            type="number"
            placeholder="Insira a quantidade de pets"
            onChange={handleLimits}
          />
          <Input
            entity={valueHour}
            label="Valor cobrado por hora?"
            type="number"
            placeholder="Defina o valor em centavos - ex: 100 = 1,00 real"
            onChange={handleValueHour}
          />
          <Input
            entity={scheduler}
            label="Habilitar agendamentos?"
            type="checkbox"
            onChange={handleScheduler}
          />
        <Button text="Salvar" typeButton="submit" isLoading={isLoading} />
      </Form>
      <button onClick={_navigateToMenu} >Voltar ao menu</button>
    </CenteredContainer>

  )
}

export default Configurations;