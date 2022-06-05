import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    


    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPass = event => {
        setConfirmPass(event.target.value);
    }
    if(user){
        navigate('/login');
    }
    const handleUser = event => {
        //console.log(event.target.value);
        alert('Account created succesfully');
        event.preventDefault();

        if (password !== confirmPass) {
            alert("Password Did not match...");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='mt-10 '>

            <h1 className='text-3xl'> Sign-UP</h1>
            <form onSubmit={handleUser}>
                <input onBlur={handleEmail} className='p-2 border-2 bg-white w-1/4 rounded mt-3' type="email" placeholder='email' required></input>
                <br></br>
                <br></br>
                <input onBlur={handlePassword} className='p-2 border-2 w-1/4 rounded' type="password" placeholder='password' required></input>
                <br></br>
                <br></br>
                <input onBlur={handleConfirmPass} className='p-2 border-2 w-1/4 rounded' type="password" placeholder='confirm-password' required></input>
                <br></br>

                <h1>Already have an Account? <Link className='text-red-400 font-bold' to={'/login'}>Login</Link> </h1>
                <br></br>


                <button  className='border-2 w-1/4 bg-blue-400 p-2 text-xl rounded text-white hover:bg-white hover:text-black' name='submit'> Sign-up</button>
                <h1 className='text-red-700'>Check Email for Verify....</h1>




                <h1>OR</h1>
                <h1>----------------------------------------------------</h1>

                <button className=' w-1/4 ml-56  '> <img className='w-20 ' src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" /> </button>
            </form>



        </div >
    );
};

export default Signup;