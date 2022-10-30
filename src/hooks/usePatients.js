import {createContext, useState, useCallback, useContext, useEffect} from 'react';

import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { firebase } from '../config/firebase'

const PatientsContext = createContext({});

export function PatientsProvider({children}){
  const [patients, setPatients] = useState([]);
  const db = getFirestore(firebase);
  const useCollectionRef = collection(db, 'patients');

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

  const handlePatients = useCallback(async (patient) => {
    const id = String(Math.random())
    const {name, age, time} = patient
    const newPatient = {
      id, 
      name, 
      date: patient.date, 
      age,
      time,
      concluded: false
    }
    await addDoc(useCollectionRef, newPatient)
    setPatients(prevState => ([...prevState, newPatient]))
    setIsModalCriationPatient(false)
  },[useCollectionRef])

  const removePatient = useCallback(async (id) => {
    const userDoc = doc(db, 'patients', id);
    await deleteDoc(userDoc)
    setPatients(patients.filter((item) => item.id !== id))
  },[patients, db])

  useEffect(() => {
    (async () => {
      const response = await getDocs(useCollectionRef)
      const data = response.docs.map(doc => ({...doc.data(), id: doc.id}))
      const newPatients = data.map((patient) => ({
        ...patient,
        date: new Date(patient.date)
      }))
      setPatients(newPatients)
    })()
  },[])

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