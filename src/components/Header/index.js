import React from 'react';

import * as S from './styles';

import Logo from '../../assets/icons/logo.svg'
import Plus from '../../assets/icons/plus.svg'

function Header({setModalCriationPatient, setPatientName}) {
  return (
    <S.Container>
      <img src={Logo} alt="agendamente" />
      <div>
        <input placeholder='Digite o nome do paciente' onChange={e => setPatientName(e.target.value)}/>
        <button onClick={setModalCriationPatient}>
          <strong>Criar</strong>
          <img src={Plus} alt="+" />
        </button>
      </div>
    </S.Container>
  );
}

export default Header;