import React, { useState } from 'react';
import { CenteredContainer, CenteredContainerSched, Header } from '../../styles/general';
import Logo from '../../assets/logo.png';
import { ButtonHour } from './styles'

const hours: any = {
  8: '8h00',
  9: '9h00',
  10: '10h00',
  11: '11h00',
  12: '12h00',
  13: '13h00',
  14: '14h00',
  15: '15h00',
  16: '16h00',
  17: '17h00',
}

const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

const Scheduler: React.FC = () => {
  return (
    <>
      <CenteredContainer>
        <img src={Logo} alt="Logo da Loved Ped" />
        <Header>Horários disponíveis - {date}</Header>

      </CenteredContainer>
      <CenteredContainerSched>
        {
          Object.keys(hours).map((hour) =>
            <ButtonHour decline={true} isDisabled={true}>{hours[hour]}</ButtonHour>
          )
        }
      </CenteredContainerSched>
    </>
  )


}

export default Scheduler;
