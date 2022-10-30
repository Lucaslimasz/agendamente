import React from 'react';

import * as S from './styles';

import Logo from '../../assets/icons/logo.svg';
import Plus from '../../assets/icons/plus.svg';

import { usePatients } from '../../hooks/usePatients';
import { useAuthGoogle } from '../../hooks/useAuthGoogle';

function Header() {
  const { setIsModalCriationPatient, patientName, handleNamePatient } = usePatients();
  const { signOut } = useAuthGoogle()

  return (
    <S.Container>
      <img src={Logo} alt="agendamente" />
      <div>
        <input 
          placeholder='Digite o nome do paciente' 
          onChange={e => handleNamePatient(e.target.value)} 
        />
        <button onClick={() => patientName.length > 3 && setIsModalCriationPatient(true)}>
          <strong>Criar</strong>
          <img src={Plus} alt="+" />
        </button>
        <button onClick={signOut} className="SignOut">sair</button>
      </div>
    </S.Container>
  );
}

export default Header;