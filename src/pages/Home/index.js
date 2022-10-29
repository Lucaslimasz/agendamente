import Header from "../../components/Header";
import PatientList from "../../components/PatientList";

import * as S from './styles'

function Home() {

  return (
    <S.Container>
      <Header/>
      <PatientList/>
    </S.Container>
  );
}

export default Home;
