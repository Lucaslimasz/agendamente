import { Navigate } from 'react-router-dom';
import { useAuthGoogle } from '../../hooks/useAuthGoogle';

import * as S from './styles';

import Google from '../../assets/icons/google.webp';

function Auth() {
  const { signInGoogle, signed } = useAuthGoogle();

  async function loginGoogle() {
    await signInGoogle();
  }

  if (!signed) {
    return (
      <S.Container>
        <button onClick={loginGoogle}>
          <img src={Google} alt="" />
          <p>Logar com o Google</p>
        </button>
      </S.Container>
    );
  } else {
    return (
      <Navigate to="/home" />
    )
  }
}

export default Auth;
