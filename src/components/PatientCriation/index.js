import React, {useState} from 'react';
import ReactModal from 'react-modal';
import {useForm} from 'react-hook-form';

import * as S from './styles';
import { usePatients } from '../../hooks/usePatients';

export default function PatientCriation() {
  const {register, handleSubmit} = useForm();

  const {patientName, onCloseModalCriationPatient, isModalCriationPatient, handlePatients} = usePatients();

  const handleSubmitForm = (itens) => {
    handlePatients(itens)
  }

  return (
    <ReactModal
      isOpen={isModalCriationPatient}
      overlayClassName="react-modal-overlay"
      className="react-modal-register-overlay"
      onRequestClose={onCloseModalCriationPatient}
      ariaHideApp={false}
    >
      <S.Container onSubmit={handleSubmit((itens) => handleSubmitForm(itens))}>
        <h1>Agende uma consulta</h1>
        <div className='name'>
          <input defaultValue={patientName} {...register("name")}/>
          <input placeholder='Idade' {...register("age")} required/>
        </div>
        <div className='date'>
          <input type='date' {...register("date")} required/>
          <input type='time' {...register("time")} required/>
        </div>
        <button>Agendar</button>
      </S.Container>
    </ReactModal>
  );
}