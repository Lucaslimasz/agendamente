import {useState, useCallback} from 'react';

import Header from "../../components/Header";
import PatientList from "../../components/PatientList";

import * as S from './styles'

function App() {
  const [isModalCriationPatient, setModalCriationPatient] = useState(false);
  const [patientName, setPatientName] = useState('');

  const onCloseModalCriationPatient = useCallback(() => {
    setModalCriationPatient(false)
  }, [])

  return (
    <S.Container>
      <Header setModalCriationPatient={setModalCriationPatient} setPatientName={setPatientName}/>
      <PatientList
        isModalCriationPatient={isModalCriationPatient}
        onCloseModalCriationPatient={onCloseModalCriationPatient}
        patientName={patientName}
      />
    </S.Container>
  );
}

export default App;
