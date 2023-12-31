import { Link, NavLink } from "react-router-dom";
import profile from '../assets/profile.png';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/' className='text-white'>Home</NavLink></li>
        <li><NavLink to='/contact' className='text-white'>Contact Us</NavLink></li>
        <li><NavLink to='/menu' className='text-white'>Our Menu</NavLink></li>
        <li><NavLink to='/shop' className='text-white'>Our Shop</NavLink></li>
    </>

    return (
        <div className="bg-[#1515156d] fixed w-full z-10">
            <div className="max-w-7xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to='/'>
                            <div className="flex flex-col p-2 bg-base-200 rounded-lg">
                                <p className="text-base font-semibold">Bistro Boss</p>
                                <p className="text-xs tracking-[.2em]">Restaurant</p>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-w0 rounded-full">
                                    <img src={profile} alt="profile" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;