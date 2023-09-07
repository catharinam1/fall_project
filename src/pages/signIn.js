import React from "react";
import './signIn.css';
import wave from '../assets/wave.png'
import profile_pic from '../assets/pic.svg'
import reading from '../assets/reading.svg'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

 
const SignIn = () => {
    return (
        <div>
          <img className="wave" src={wave} />
          <div className="container">
            <div className="reading">
              <img src={reading} />
            </div>
            <div className="login-container">
                <form action="index.html">
                    <img className="profile_pic" src={profile_pic} />
                    <h2>Welcome</h2>

                    <div className="input-div one ">
                        <div className="i">
                            <FontAwesomeIcon icon={faLock} />
                            {/* <i className="fas fa-user"></i> */}
                        </div>
                        <div>
                            <h5>Username</h5>
                            <input className="input" type="text" placeholder="Username" />

                        </div>
                    </div>

                    <div className="input-div two">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input className="input" type="password" placeholder="Password" />
                        </div>
                    </div>
                    <p><a href="#">Forgot Password?</a></p>
                    <input type="submit" className="btn" value="login"/>
                </form>
            </div>
          </div>
        </div>
      );
      
};
 
export default SignIn;