import React from "react";
import './register.css';
 
const Register = () => {
    return (
        <div className="main">
            <input type="checkbox" className="chk"></input>
        
            <div className="registernow">
                <form>
                    <label>Register</label>
                    <input type="text" placeholder="Username" required=""></input>
                    <input type="email" placeholder="Email" required=""></input>
                    <input type="password" placeholder="Password" required=""></input>
                    <button>Register Now</button>
                </form>
            </div>
            <div className="signin">
                <form>
                    <label>Sign In</label>
                    <input type="email" placeholder="Email..." required=""></input>
                    <input type="password" placeholder="Password..." required=""></input>
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    );
};
 
export default Register;