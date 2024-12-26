import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../services/user";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onRegister = async () => {
       if(username.length === 0) {
         toast.warn('Username is required');
       } else if(email.length === 0) {
         toast.warn('Email is required');
       } else if(password.length === 0) {
         toast.warn('Password is required');
       }
       else {
         const result =await registerUser(username, email, password)

         if(result['status'] === 'success') {
           toast.success('User registered successfully');

           //go to login page
           navigate('/');
         } else {
           toast.error(result['error']);
         }
       }
    }

    return (
        <>
          <h1 className="header">Register</h1>

          <div className="row">
            <div className="col"></div>
            <div className="col">
                <div className="form">
                    <div className="mb-3">
                        <label htmlFor=''>UserName</label>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor=''>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor=''>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <div className="mb-2">
                            Already have an account? <Link to="/">here</Link>
                        </div>
                    </div>
                    <button onClick={onRegister} className="btn btn-primary">Register</button>
                </div>
            </div>
            <div className="col"></div>
          </div>
        </>
    )
}

export default Register;