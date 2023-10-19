import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useState } from "react";


const SignIn = () => {
    const {logInUser,googleLogIn}=useContext(AuthContext);
    const [success,setSuccess]=useState('')
    const [signInError,setSignInError]=useState('')
    const location=useLocation();
    const navigate=useNavigate()
    console.log(location.state);
    const handleSignIn=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        form.reset()
        setSuccess('')
        setSignInError('')
        logInUser(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location.state?  location.state:'/')
            setSuccess('User Log In Successfull');
            
        })
        .catch(error=>{
            console.log(error.message);
            setSignInError(error.message);
        })

    }
    const handleGoogleLogIn=()=>{
     googleLogIn()
     .then(result=>{
        console.log(result.user);
        navigate(location.state?  location.state:'/')
        setSuccess('User Log In Successfull');
     })
     .catch(error=>{
        console.log(error.message);
        setSignInError(error.message);
     })
    }
    return (
        <div  className=" bg-login   bg-cover flex flex-col justify-center h-[70vh] items-center p-2 ">
          <h2 className="text-5xl font-bold ">Please Log In</h2>
          <form className="max-w-screen-md w-full my-10" onSubmit={handleSignIn}>
          <div className=" flex  flex-col gap-4">
           <p className="text-3xl">Enter Your Email</p>
           <input className="w-full h-12 bg-transparent border-4 border-sky-400 text-lg rounded-md" type="email" name="email" required />
           <p className="text-3xl">Enter Your Password</p>
            <input className=" w-full h-12 bg-transparent border-4 border-sky-400 text-xl rounded-md" type="password" name="password" required  />
            <input className="btn border-4 btn-outline text-sky-500 w-full  font-semibold text-2xl text white  " type="submit" value="Log In" />
            <button className="btn border-4 btn-outline text-sky-500 w-full  font-semibold text-2xl text white  " onClick={handleGoogleLogIn}>Log In With Google</button>
            {
                success?<p className="text-green-400">{success}</p>:''
            }
            {
                signInError?<p className="text-red-500">{signInError}</p>:''
            }
            <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Do Not Have An Account?</p>
            <Link to="/register"><button className="btn btn-outline border-4 text-sky-400">Register Now</button></Link>
            </div>
          </div>

          </form>
        </div>
    );
};

export default SignIn;