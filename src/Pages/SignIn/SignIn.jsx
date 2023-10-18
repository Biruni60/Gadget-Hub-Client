import { Link } from "react-router-dom";


const SignIn = () => {
    return (
        <div  className=" bg-login   bg-cover flex flex-col justify-center h-[70vh] items-center p-2 ">
          <h2 className="text-5xl font-bold ">Please Log In</h2>
          <form className="max-w-screen-md w-full my-10">
          <div className=" flex  flex-col gap-4">
           <p className="text-3xl">Enter Your Email</p>
           <input className="w-full h-12 bg-transparent border-4 border-sky-400 text-lg rounded-md" type="email" name="email"  />
           <p className="text-3xl">Enter Your Password</p>
            <input className=" w-full h-12 bg-transparent border-4 border-sky-400 text-xl rounded-md" type="password" name="password"  />
            <input className="btn border-4 btn-outline text-sky-500 w-full  font-semibold text-2xl text white  " type="submit" value="Log In" />
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