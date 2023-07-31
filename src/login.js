import {auth,provider} from "./firebase"
import { signInWithPopup } from "firebase/auth";
import { useHistory } from "react-router-dom";


const Login = ({setauth}) => {
    let history=useHistory();
    const signinwithgoogle = () => {
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("auth",true);
            setauth(true);
            history.push("/");

        })
    }



    return (
        // <div class="login-wrapper">
        // <div class="login-box">
        //   <h2>Student</h2>
        //   <form>
        //     <label for="username"></label>
        //     <input type="text" placeholder="Username" name="stuusername" id="email"/>
        //     <label for="password"></label>
        //     <input type="password" placeholder="Password" name="stupassword" id="password"/>
        //   </form>

        //   <div> <button type="submit" id="login">Login</button></div>
        //   {/* <!-- <a href="forgot.html">Forgot Password</a> --> */}
        <div className="LoginPage">
            <p>Sign in with Google to continue</p>
            <button className="login-with-google-btn" onClick={signinwithgoogle}>
                Click to sigin
            </button>
        </div>
        
      );
}
 
export default Login;
