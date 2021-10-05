import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.png';
const Header = () => {
    const activeStyle = {
        color: '#333',
        borderColor : '#333'
    }
    return (
        <div>
            <header className="bg-green-100 py-4 border-b-2 border-green-600">
                <div className="container mx-auto px-2 flex items-center justify-between">
                    <div>
                        <img className="w-40" src={Logo} alt="" />
                    </div>
                    <nav className="flex items-center">
                        <NavLink activeStyle={activeStyle} className="ml-2 text-lg border-b-2 border-transparent font-medium text-red-500" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="ml-2 text-lg border-b-2 border-transparent font-medium text-red-500" to="/about">About</NavLink>
                        <NavLink activeStyle={activeStyle} className="ml-2 text-lg border-b-2 border-transparent font-medium text-red-500" to="/services">Services</NavLink>
                        <NavLink activeStyle={activeStyle} className="ml-2 text-lg border-b-2 border-transparent font-medium text-red-500" to="/teacher">Teacher</NavLink>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;