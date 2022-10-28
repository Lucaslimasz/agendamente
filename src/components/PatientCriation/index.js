import React, {useState} from 'react';
import ReactModal from 'react-modal';
import {useForm} from 'react-hook-form';

import * as S from './styles';

export default function PatientCriation({ isOpen, onCloseModal, patientName }) {
  const {register, handleSubmit} = useForm();
  const [data, setData] = useState();

  const handleSubmitForm = (itens) => {
    setData(itens)

    console.log(data)
  }

  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-register-overlay"
      onRequestClose={onCloseModal}
    >
      <S.Container onSubmit={handleSubmit((itens) => handleSubmitForm(itens))}>
        <h1>Agende uma consulta</h1>
        <div className='name'>
          <input value={patientName} {...register("name")} disabled/>
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