import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-green-500 pt-10">
            <div className="container text-left px-3  mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                    <ul>
                        <li className="text-xl  font-bold border-b-2 pb-3 border-white text-white">All Pages</li>
                        <li className="text-lg cursor-pointer pt-3 font-medium text-white"><Link>Home </Link></li>
                        <li className="text-lg cursor-pointer font-medium text-white"><Link>About </Link></li>
                        <li className="text-lg cursor-pointer font-medium text-white"><Link>Services </Link></li>
                        <li className="text-lg cursor-pointer font-medium text-white"><Link>Teachers </Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="text-xl font-bold border-b-2 pb-3 border-white text-white">All Social Contact</li>
                        <li className="text-lg cursor-pointer pt-3 text-white"><i class="fab fa-facebook-f"></i> Facebook</li>
                        <li className="text-lg cursor-pointer text-white"><i class="fab fa-twitter"></i> Twitter</li>
                        <li className="text-lg cursor-pointer text-white"><i class="fab fa-google-plus-g"></i> Google Plus</li>
                        <li className="text-lg cursor-pointer text-white"><i class="fas fa-envelope"></i> Email</li>
                    </ul>
                </div>
                <div>

                    <ul>
                        <li className="text-xl  font-bold border-b-2 pb-3 border-white text-white">Principle </li>
                        <li className="text-lg cursor-pointer font-medium pt-3 text-white">Asadullah Hil Galib</li>
                        <li className="text-lg cursor-pointer font-medium text-white">Shybul Alif Sakib</li>
                        <li className="text-lg cursor-pointer font-medium text-white">Mr. Arif Ahammad (Arif)</li>
                        <li className="text-lg cursor-pointer font-medium text-white">Mr. Saifur Rahman</li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-800 py-5 text-center mt-10">
                <span className="text-lg text-white">&copy;copyright 2021 coder boy galib...</span>
            </div>
        </div>
    );
};

export default Footer;