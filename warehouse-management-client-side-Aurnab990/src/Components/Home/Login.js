import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
//import Usefirebase from '../../GoogleLogin/Usefirebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //const {signInWithGoogle} = Usefirebase();
    const navigate = useNavigate();
    const location = useLocation();
    
    const [
        signInWithEmailAndPassword,
        user,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const from = location.state?.from?.pathname || '/home';

    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }
    if(user){
        navigate(from, {replace: true});

    }
    
    const handleLogin = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
        .then(result =>{
            const user = result.user;
            alert("Successfully Logged in");
        })
        .catch(error =>{
            alert("Invalid Password");
        })
        event.preventDefault();
    }
    



    return (
        <div className='mt-10 '>
            <form onSubmit={handleLogin}>
            <h1 className='text-3xl'> Login</h1>
            <input onBlur={handleEmail} className='p-2 border-2 bg-white w-1/4 rounded mt-3' type="email" placeholder='email' required></input>
            <br></br>
            <br></br>
            <input onBlur={handlePassword} className='p-2 border-2 w-1/4 rounded' type="password" placeholder='password' required></input>
            <br></br>
            <br></br>
            
            <h1>Don't have an Account? <Link className='text-red-400 font-bold' to={'/signup'}>Create an Account</Link> </h1>
            <br></br>

            <h1 className='text-xl text-red-800'>{error?.message}</h1>
            
                
                <button className='border-2 w-1/4 bg-blue-400 p-2 text-xl rounded text-white hover:bg-white hover:text-black'> Login</button>
            
           
            
            <h1>OR</h1>
            <h1>----------------------------------------------------</h1>
            
            </form>
            <button   className=' w-1/4 ml-56  '> <img className='w-20 ' src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" /> </button>
           
        </div >
    );
};

export default Login;