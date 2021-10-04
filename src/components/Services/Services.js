import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
     },[])
    return (
        <div>
            <div className="bg-red-400 py-8 ">
                <span className="text-gray-500 text-xl"><Link className="text-gray-900" to="/home">Home /</Link> Services </span>
                <h2 className="text-white capitalize font-bold text-3xl">Our all Services</h2>
            </div>
            <div className="container px-3 mx-auto py-10  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                services.map(service => <Service key={Service.key} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;