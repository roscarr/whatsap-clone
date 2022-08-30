import { Button } from "@mui/material";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import { auth, provider } from "../../firebase";
import "./Login.css";
function Login() {
  const [{}, dispath] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispath({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign with Google</Button>
      </div>
    </div>
  );
}

export default Login;
