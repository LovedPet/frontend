
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import {
  CenteredContainer,
  LinksContainer,
  Header
} from '../../styles/general';
import {
  Button
} from '../../components/General'
import { useHistory } from 'react-router';

const Pets: React.FC = () => {
  const history = useHistory();
  const _navigateToMenu = () => history.push('/main');

  return (
    <CenteredContainer>
      <LinksContainer>
        <img src={Logo} alt="Logo da Loved Ped" />
      </LinksContainer>
      <Header>
        Acesse ao tutorial de uso do sistema
      </Header>

      <a href="https://www.loom.com/share/aa876e688c6845ab8c23db59f4f94f54">Clique aqui para acessar o tutorial de uso</a>
      <Button text="Voltar" typeButton="submit" onClick={_navigateToMenu} />
    </CenteredContainer>

  )
}

export default Pets;