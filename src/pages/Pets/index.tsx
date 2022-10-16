
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Logo from '../../assets/logo.png';
import {
  CenteredContainer,
  LinksContainer,
  Header
} from '../../styles/general';
import { scheduler, getConfigurate } from '../../services/api';
import { useHistory } from 'react-router';
import { getPets } from '../../services/api'
import { PetInfo, ButtonHour } from './styles'


const actualDate = moment().format("MMMM Do YYYY"); // "Sunday, February 14th 2010, 3:25:50 pm"

const Pets: React.FC = () => {
  const history = useHistory();
  const [pets, setPets] = useState<any[]>([])
  const [price, setPrice] = useState(0)

  useEffect(() => {
    const fetch = async () => {
      try {
        const x = await getPets()
        const config = await getConfigurate()
        console.log("aaaaa ", config)
        setPrice(config.data.value_hour/100)
        setPets(x.data)
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
        Relatório do Sistema
      </Header>
      <h3>Pets cadastrados: {pets.length}</h3>
      <h3>Valor cobrado por agendamento: {price}</h3>
      <h3>Valor faturado no mês: {price * pets.length}</h3>
      <>
        {pets.length > 0 ?
          pets.map((p) => {
            p = JSON.parse(p.pet_info)
            console.log('Cadeee ', p)
            return (
              <>
                <PetInfo>
                  <p>
                    <b>Nome do Pet:</b> {p.pet_name}
                  </p>
                  <p>
                    <b>Nome do Dono:</b> {p.pet_owner}
                  </p>
                  <p>
                    <b>Raça:</b> {p.race_pet}
                  </p>
                </PetInfo>
              </>
            )
          }) :
          <h1>O sistema ainda não possui PETs no sistema</h1>
        }
      </>
    </CenteredContainer>

  )
}

export default Pets;