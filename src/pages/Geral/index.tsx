import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import {
  CenteredContainer,
  Header,
  LinksContainer
} from '../../styles/general';
import {
  Button, ButtonGeral,
} from '../../components/General';
import { useHistory } from 'react-router';
import { Div } from './styles';

const hours = [9,10,11,12,13,14,15,16,17,18]
const ocupation = '4/5'

const date = '31/08'

const Geral: React.FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CenteredContainer>
      <LinksContainer>
        <img src={Logo} alt="Logo da Loved Ped" />
      </LinksContainer>
      <Header>
        Seus agendamentos - {date}
      </Header>
        {hours.map((h) => {
            return <Div><h1>{String(h)+'h'}</h1><h1>{ocupation}</h1></Div>

          })}

        <Button text="Voltar" typeButton="submit" onClick={() => history.push('/main')}/>
    </CenteredContainer>

  )
}

export default Geral;