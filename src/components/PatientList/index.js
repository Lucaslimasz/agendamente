import React, { useCallback, useState } from 'react';

import * as S from './styles';

import Clipboard from '../../assets/icons/clipboard.svg';
import Check from '../../assets/icons/check.svg';
import CheckSelected from '../../assets/icons/check-selected.svg';
import Trash from '../../assets/icons/trash.svg';
import PatientCriation from '../PatientCriation';

export default function PatientList({ isModalCriationPatient, onCloseModalCriationPatient, patientName }) {
  const [patients, setPatients] = useState([
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
    {
      id: String(Math.random()),
      name: 'Sergio Ramos Soares da Silva',
      age: '23',
      date: new Date('2022-10-28'),
      time: '14:40',
      concluded: false
    },
  ])

  const completePatientCheck = useCallback((id) => {
    setPatients(patients.map((item) => {
      if (item.id === id) {
        item.concluded = !item.concluded
      }

      return item
    }))
  }, [patients])

  const removePatient = useCallback((id) => {
    setPatients(patients.filter((item) => item.id !== id))
  },[patients])

  return (
    <>
      <PatientCriation
        onCloseModal={onCloseModalCriationPatient}
        isOpen={isModalCriationPatient}
        patientName={patientName}
      />
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