
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Logo from '../../assets/logo.png';
import {
  CenteredContainer,
  LinksContainer,
  ContainerHour,
  Form,
  Header
} from '../../styles/general';
import { Button, ButtonHour, Input } from '../../components/General';
import { General } from '../../definitions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent }  from '@mui/material/Select';
import toast from 'react-hot-toast';
import { scheduler, getConfigurate } from '../../services/api';
import { useHistory } from 'react-router';
import { getPets } from '../../services/api'


const actualDate = moment().format("MMMM Do YYYY"); // "Sunday, February 14th 2010, 3:25:50 pm"

const Pets: React.FC = () => {
  const history = useHistory();
  const [pets, setPets] = useState<any[]>([])
  // const [isActive, setIsActive] = useState(false)
  // const [hour, setHour] = useState(0)
  // const [closed, setClosed] = useState(true)
  // const [open, setOpen] = useState(false)
  // const [petName, setPetName] = useState<General.Value>({
  //   ...General.initialValue,
  //   validation: (value: string) => value,
  // });
  // const [petOwner, setPetOwner] = useState<General.Value>({
  //   ...General.initialValue,
  //   validation: (value: string) => value,
  // });

  useEffect(() => {
    const fetch = async () => {
      try {
        const x = await getPets()
        // const y = await getConfigurate()
        console.log("aaaaa ", x.data)
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
        Pets que estão cadastrados no sistema:
      </Header>
      <>
        {pets.length > 0 ?
          pets.map((p) => {
            p = JSON.parse(p.pet_info)
            console.log('Cadeee ', p)
            return (<h1>{p.pet_name}</h1>)
          }) :
          <h1>O sistema ainda não possui PETs no sistema</h1>
        }
      </>
    </CenteredContainer>

  )
}

export default Pets;