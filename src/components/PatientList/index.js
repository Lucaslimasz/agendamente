import React from 'react';

import * as S from './styles';

import Clipboard from '../../assets/icons/clipboard.svg';
import Check from '../../assets/icons/check.svg';
import CheckSelected from '../../assets/icons/check-selected.svg';
import Trash from '../../assets/icons/trash.svg';
import PatientCriation from '../PatientCriation';

import { usePatients } from '../../hooks/usePatients'

export default function PatientList() {

  const { 
    patients, 
    completePatientCheck,
    removePatient, 
  } = usePatients()

  return (
    <>
      <PatientCriation />
      <S.Container>
        <S.Top>
          <div>
            <strong>Pacientes do dia</strong>
            <span>{patients.length}</span>
          </div>
          <div>
            <strong>Concluídas</strong>
            <span>
              {
                patients.length !== 0 ? patients.filter(item => item.concluded).length + ' de ' + patients.length : 0
              }
            </span>
          </div>
        </S.Top>

        {
          patients.length > 0 ? (
            <S.Patients>
              <tbody>
              <tr>
                <th style={{ color: 'transparent' }}>Checkar</th>
                <th>Nome</th>
                <th>Idade</th>  
                <th>Dia</th>
                <th>Horário</th>
                <th></th>
              </tr>
              {
                patients.map((item) => (
                  <S.Patient className='patient' key={item.id} checked={item.concluded}>
                    <td className='check' onClick={() => completePatientCheck(item.id)}>
                      {item.concluded ? (
                        <img src={CheckSelected} alt="Selecionar" />
                      ) : <img src={Check} alt="Selecionar" />}
                    </td>
                    <td className='name'>{item.name}</td>
                    <td>{item.age} Anos</td>
                    <td>{Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short' }).format(item.date)}</td>
                    <td>{item.time}</td>
                    <td className='stash' onClick={() => removePatient(item.id)}><img src={Trash} alt="Apagar" /></td>
                  </S.Patient>
                ))
              }
              </tbody>
            </S.Patients>
          ) : (
            <S.Empty>
              <img src={Clipboard} alt="Empty" width={56} />
              <strong>Não há pacientes marcado para esse dia</strong>
              <p>Cadastre seus pacientes</p>
            </S.Empty>
          )
        }
      </S.Container>
    </>
  );
}