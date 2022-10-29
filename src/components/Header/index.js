import React from 'react';

import * as S from './styles';

import Logo from '../../assets/icons/logo.svg';
import Plus from '../../assets/icons/plus.svg';

import { usePatients } from '../../hooks/usePatients';

function Header() {
  const {setIsModalCriationPatient, patientName, handleNamePatient} = usePatients();

  return (
    <S.Container>
      <img src={Logo} alt="agendamente" />
      <div>
        <input placeholder='Digite o nome do paciente' value={patientName} onChange={e => handleNamePatient(e.target.value)}/>
        <button onClick={setIsModalCriationPatient}>
          <strong>Criar</strong>
          <img src={Plus} alt="+" />
        </button>
      </div>
    </S.Container>
  );
}

export default Header;