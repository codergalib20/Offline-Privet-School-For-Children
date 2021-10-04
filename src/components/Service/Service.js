import React from 'react';

const Service = (props) => {
    const { name, classSize, img, time, id, about, tutionFee, yarsOld } = props.service;
    return (
        <div className="p-4 border-t-8 border-red-500 rounded-t-2xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
            <div className="overflow-hidden">
                <img className=" transition duration-600 ease-linear transform scale-100 hover:scale-110" src={img} alt={id} />
            </div>
            <h3 className="text-2xl my-3 capitalize font-bold text-red-600"> {name}</h3>
            <div className="flex justify-between">
                <span className="text-md capitalize font-bold text-gray-900">Class Size : {classSize}</span>
                <span className="text-md capitalize font-bold text-gray-900">Time : {time}</span>
            </div>
            <div className="flex justify-between">
                <span className="font-bold capitalize text-md">Tuition fee : {tutionFee}</span>
                <span className="font-bold capitalize text-md">Years old : {yarsOld}</span>
            </div>
            <p className="text-md text-justify mt-3 text-gray-500 font-medium">{about.substr(0, 150)}</p>
        </div>
    );
};
export default Service;