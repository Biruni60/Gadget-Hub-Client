import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const NavBar = () => {
    const links=<>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/addproduct'>ADD PRODUCT</NavLink></li>
        <li><NavLink to='/mycart'>MY CART</NavLink></li>
    </>
    return (
        <nav>
           <div className="navbar bg-sky-500 p-6 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" dropdown-content my-3 z-[1] p-4 shadow bg-red-100 rounded-box w-60 flex flex-col gap-5">
       {
        links
       }
      </ul>
    </div>
  <div className="flex items-center gap-2  ">
    <img className="w-10 rounded-md" src="https://i.ibb.co/10YRYHd/6387627-1.jpg" alt="" />
    <h2 className="text-2xl font-bold text-red-100 ">GADGETHUB</h2>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-10 text-xl font-bold">
{
    links
}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/signin'><button className="btn btn-outline text-white text-xl font-medium">Log In</button></Link>
  </div>
</div>
        </nav>
    );
};

export default NavBar;