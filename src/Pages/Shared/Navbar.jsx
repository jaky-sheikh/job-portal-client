import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from '../../assets/job.png';


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Successful sign out')
            })
            .catch(error => {
                console.log('failed to sign out', error.message)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><a>Item 3</a></li>
    </>

    return (
        <div>
            <div className="navbar bg-cyan-300 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className="w-12" src={logo} alt="" />
                    <h2 className="text-xl">Job Portal</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleSignOut} className="btn">Sign Out</button>
                        </> : <>
                            <Link to="/register">Register</Link>
                            <Link to="/signIn">
                                <button className="btn">Sign In</button>
                            </Link>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;