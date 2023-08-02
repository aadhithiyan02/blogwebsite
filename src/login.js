import {auth,provider} from "./firebase"
import { signInWithPopup } from "firebase/auth";
import { useHistory } from "react-router-dom";


const Login = ({setauth}) => {
    let history=useHistory();
    const signinwithgoogle = () => {
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("auth",true);
            setauth(true);
            history.push("/blogwebsite");

        })
    }



    return (

        <div className="LoginPage">
            <p>Sign in with Google to continue</p>
            <button className="login-with-google-btn" onClick={signinwithgoogle}>
                Click to sigin
            </button>
        </div>
        
      );
}
 
export default Login;
