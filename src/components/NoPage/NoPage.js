import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../img/notFound.png';
const NoPage = () => {
    return (
        <div className="bg-gray-50">
             <div className="bg-red-400 py-8 ">
                <span className="text-gray-500 text-xl"><Link className="text-gray-900" to="/home">Home /</Link> Not Found </span>
                <h2 className="text-white capitalize font-bold text-3xl">Our all Services</h2>
            </div>
            <div className="container  h-screen flex items-center flex-col justify-center mx-auto ">
                <img className="w-80" src={notFoundImg} alt="" />
                <h1 className="text-center text-2xl text-gray-600">Not Found page</h1>
            </div>
        </div>
    );
};

export default NoPage;