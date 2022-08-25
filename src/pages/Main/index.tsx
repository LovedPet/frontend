import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import {
  CenteredContainer,
  Header,
  LinksContainer
} from '../../styles/general';
import {
  Button,
} from '../../components/General';
import { useHistory } from 'react-router';

const Main: React.FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CenteredContainer>
      <LinksContainer>
        <img src={Logo} alt="Logo da Loved Ped" />
      </LinksContainer>
      <Header>
        Seja bem vindo a administração da sua creche de PETs!
      </Header>

        <Button text="Configurações" typeButton="submit" onClick={() => history.push('/configurations')}/>
        <Button text="Agendamentos" typeButton="submit" isLoading={isLoading} />
    </CenteredContainer>

  )
}

export default Main;