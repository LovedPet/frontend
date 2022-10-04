
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


const hours = [9,10,11,12,13,14,15,16,17,18]

const actualDate = moment().format("MMMM Do YYYY"); // "Sunday, February 14th 2010, 3:25:50 pm"

const Scheduler: React.FC = () => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false)
  const [hour, setHour] = useState(0)
  const [closed, setClosed] = useState(true)
  const [open, setOpen] = useState(false)
  const [petName, setPetName] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });
  const [petOwner, setPetOwner] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });
  const [addressPetOwner, setAddressPetOwner] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });
  const [racePet, setRacePet] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });
  const [weightPet, setWeightPet] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });
  const [tag, setTag] = useState('');
  const [info, setInfo] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => value,
  });

  const [separate, setSeparate] = useState(false)

  const handlePetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setPetName({ ...petName, value, invalidity });
  };

  const handlePetOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setPetOwner({ ...petOwner, value, invalidity });
  };

  const handleAddressPetOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setAddressPetOwner({ ...petName, value, invalidity });

  };

  const handleRacePet = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setRacePet({ ...petName, value, invalidity });

  };

  const handleWeightPet = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setWeightPet({ ...petName, value, invalidity });
  };

  const handleTag = (event: SelectChangeEvent) => {
    setTag(event.target.value as string);
  };

  const handleInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = '';

    setInfo({ ...info, value, invalidity });
  };

  const handleSeparate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    console.log('aqui ó', checked)

    setSeparate(checked);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { scheduler_active } = await getConfigurate()
        console.log('Eaaa ', scheduler_active)
        // setClosed(scheduler_active)
        setOpen(scheduler_active)

      } catch (error) {
        throw error
      }
    }

    fetch()
  }, [])


   const handleSubmit = async (event: React.FormEvent) => {
     event.preventDefault()
     try {
        console.log('Realiza chamada na API.');

        const data = {
          pet_info: {
            pet_name: petName.value,
            pet_owner: petOwner.value,
            address_owner_pet: addressPetOwner.value,
            race_pet: racePet.value,
            weight_pet: weightPet.value
          },
          tag,
          hour,
          separate: separate,
        }

        await scheduler(data)
        toast.success('Agendado com sucesso! ');
        setTimeout(() => window.location.reload(), 3000)
     } catch (error) {
       toast.error('Falha ao realizar o agendamento');
     }
   };

  return (
    <CenteredContainer>
      <LinksContainer>
        <img src={Logo} alt="Logo da Loved Ped" />
      </LinksContainer>
      <Header>
        Bem vindo, realize seu agendamento:
        <br/>
        <br/>
        {actualDate}
      </Header>
      <ContainerHour onSubmit={handleSubmit}>
        {closed && hours.map((h) => {
          return <ButtonHour onClick={() => {
            setOpen(true)
            setHour(h)
            setClosed(false)
          }} text={String(h)+'h'} typeButton="submit" />

        })}
        {open &&
          <CenteredContainer>
            <h3>Voce está agendando para às {hour}h00</h3>
            <Form>
              <Input
                entity={petName}
                label="Nome do Pet"
                type="text"
                placeholder="Digite o nome do seu pet"
                onChange={handlePetName}
              />
              <Input
                entity={petOwner}
                label="Dono do Pet"
                type="text"
                placeholder="Digite o seu nome"
                onChange={handlePetOwner}
              />
              <Input
                entity={addressPetOwner}
                label="Endereço do Dono do Pet"
                type="text"
                placeholder="Digite o endereço do dono do pet"
                onChange={handleAddressPetOwner}
              />
              <Input
                entity={racePet}
                label="Raça do Pet"
                type="text"
                placeholder="Digite a raça do seu pet"
                onChange={handleRacePet}
              />
              <Input
                entity={weightPet}
                label="Peso do Pet"
                type="text"
                placeholder="Digite o peso do seu pet"
                onChange={handleWeightPet}
              />
              <InputLabel id="demo-simple-select-label">Como voce define o comportamento do seu Pet?</InputLabel>
              <Select
                key={tag}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tag}
                label="Age"
                onChange={handleTag}
              >
                <MenuItem value={10}>Calmo</MenuItem>
                <MenuItem value={20}>Agitado</MenuItem>
                <MenuItem value={30}>Estressado</MenuItem>
              </Select>
              {/* <Input
                entity={info}
                label="Seu pet deve ficar em um local separado dos demais?"
                type="checkbox"
                onChange={handleSeparate}
              /> */}
              <label>
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={separate}
                  onChange={handleSeparate}
                />
                  Seu pet deve ficar separado dos demais?
              </label>
              <Button text="Salvar" typeButton="submit"  />
            </Form>
            <button onClick={() => setTimeout(() => window.location.reload(), 1000)} >Voltar</button>

          </CenteredContainer>

        }

      </ContainerHour>


    </CenteredContainer>

  )
}

export default Scheduler;