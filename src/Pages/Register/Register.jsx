import {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const{user,createUser,profileUpdate}=useContext(AuthContext);
    const [success,setSuccess]=useState('');
    const [registerError,setRegisterError]=useState('')
const handleRegister=(e)=>{
 e.preventDefault();
 const form=e.target;
 const name=form.name.value;
 const photo=form.photo.value;
 const email=form.email.value;
 const password=form.password.value;
 setRegisterError('')
 setSuccess('')
 if(password.length<6){
     setRegisterError('password Should be 6 or more');
     e.target.reset();
    return;
 }
 if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)){
    setRegisterError("Password should Contain minimum six characters, at least one letter, one number and one special character ")
    e.target.reset();
    return;
 }
 createUser(email,password)
 .then(result=>{
    console.log(result.user);
    setSuccess('User Created Successfully')
    profileUpdate(name,photo)
    .then(
    )
    .then(error=>
        {
            console.log(error.message);
        })
        e.target.reset();
 })
 .then(error=>{
    console.log(error.message);
    e.target.reset();
 })
 
}
    return (
        <div  className=" bg-login   bg-cover flex flex-col justify-center h-[100vh] items-center p-2 ">
        <h2 className="text-5xl font-bold ">Please Register</h2>
        <form className="max-w-screen-md w-full my-10" onSubmit={handleRegister}>
        <div className=" flex  flex-col gap-4">
         <p className="text-3xl">Enter User Name</p>
         <input className="w-full h-12 bg-transparent border-4 border-sky-400 text-lg rounded-md" type="text" name="name"  />
         <p className="text-3xl">Enter Profile Image Url</p>
         <input className="w-full h-12 bg-transparent border-4 border-sky-400 text-lg rounded-md" type="text" name="photo"  />
         <p className="text-3xl">Enter  Email</p>
         <input className="w-full h-12 bg-transparent border-4 border-sky-400 text-lg rounded-md" type="email" name="email"  />
         <p className="text-3xl">Enter  Password</p>
          <input className=" w-full h-12 bg-transparent border-4 border-sky-400 text-xl rounded-md" type="password" name="password"  />
          <input className="btn border-4 btn-outline text-sky-500 w-full  font-semibold text-2xl text white  " type="submit" value="Register" />
          <div className="flex justify-between items-center">
          <p className="text-xl font-medium">Already Have An Account?</p>
          <Link to="/signin"><button className="btn btn-outline border-4 text-sky-400">Log In</button></Link>
          </div>
        </div>



        </form>
      </div>
    );
};

export default Register;