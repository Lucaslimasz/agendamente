import {createContext, useState, useCallback, useContext} from 'react';

const PatientsContext = createContext({});

export function PatientsProvider({children}){
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
  ])

  const [isModalCriationPatient, setIsModalCriationPatient] = useState(false);
  const [patientName, setPatientName] = useState('');

  const onCloseModalCriationPatient = useCallback(() => {
    setIsModalCriationPatient(false)
  }, [])

  const handleNamePatient = useCallback((name) => {
    setPatientName(name)
  }, [])

  const completePatientCheck = useCallback((id) => {
    setPatients(patients.map((item) => {
      if (item.id === id) {
        item.concluded = !item.concluded
      }

      return item
    }))
  }, [patients])

  const handlePatients = useCallback((patient) => {
    const id = String(Math.random())
    const {name, age, time} = patient
    const newPatient = {
      id, 
      name, 
      date: new Date(String(patient.date).split('-')), 
      age,
      time,
      concluded: false
    }
    setPatients(prevState => [...prevState, newPatient])
    setIsModalCriationPatient(false)
  },[])

  const removePatient = useCallback((id) => {
    setPatients(patients.filter((item) => item.id !== id))
  },[patients])

  return(
    <PatientsContext.Provider value={{
      isModalCriationPatient,
      setIsModalCriationPatient,
      patientName,
      setPatientName,
      onCloseModalCriationPatient,
      patients,
      setPatients,
      completePatientCheck,
      removePatient,
      handlePatients,
      handleNamePatient
    }}>
      {children}
    </PatientsContext.Provider>
  )
}

export function usePatients(){
  const ctx = useContext(PatientsContext);

  return ctx
}