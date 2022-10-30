import { Navigate } from 'react-router-dom';
import { useAuthGoogle } from '../../hooks/useAuthGoogle';

import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";


import * as S from './styles';

import Google from '../../assets/icons/google.webp';
import { firebase } from '../../config/firebase';

function Auth() {
  const { signInGoogle, signed } = useAuthGoogle();
  const provider = new FacebookAuthProvider();

  async function loginGoogle() {
    await signInGoogle();
  }

  const loginFacebook = () => {

    const auth = getAuth(firebase);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        console.log(user, accessToken)
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = FacebookAuthProvider.credentialFromError(error);
      });
  }

  if (!signed) {
    return (
      <S.Container>
        <button onClick={loginGoogle}>
          <img src={Google} alt="" />
          <p>Logar com o Google</p>
        </button>
        <button onClick={loginFacebook}>
          <img src={Google} alt="" />
          <p>Logar com o Facebook</p>
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
