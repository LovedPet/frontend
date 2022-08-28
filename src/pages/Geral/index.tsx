import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import moment from 'moment';
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
import { getSchedulers, getConfigurate } from '../../services/api'
const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
const ocupation = '/5'

const date = '31/08'
const actualDate = moment().format("MMMM Do YYYY"); // "Sunday, February 14th 2010, 3:25:50 pm"


const Geral: React.FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [sched, setSched] = useState<any[]>([])
  const [petLimits, setPetLimits] = useState(0)

  useEffect(() => {
    const fetch = async () => {
      try {
        const x = await getSchedulers()
        const y = await getConfigurate()
        console.log("aaaaa ", y.data.pet_limits)
        setSched(x.data)
        setPetLimits(y.data.pet_limits)
      } catch (error) {
        throw error
      }
    }

    fetch()
  }, [])

  return (
    <CenteredContainer>
      <LinksContainer>
        <img src={Logo} alt="Logo da Loved Ped" />
      </LinksContainer>
      <Header>
        Seus agendamentos - {actualDate}
      </Header>
      {hours.map((h) => {
        const filtered = sched.filter((a) => a.hour === h)
        console.log('Filtrado ', filtered.length)
        return <Div><h1>{String(h) + 'h'}</h1><h1>{filtered.length + '/' + petLimits}</h1></Div>

      })}

      <Button text="Voltar" typeButton="submit" onClick={() => history.push('/main')} />
    </CenteredContainer>

  )
}

export default Geral;