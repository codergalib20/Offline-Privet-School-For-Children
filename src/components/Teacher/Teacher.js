import React from 'react';

const Teacher = (props) => {
    const { name, phone, id, email, article, workd,img} = props.teacher;
    return (
        <div className="transition-all duration-500 ease-in-out shadow-xl hover:shadow-2xl p-5 border border-t-8 border-opacity-50 border-green-600 hover:border-green-800 rounded-t-2xl">
            <div className="overflow-hidden">
                <img className="cursor-pointer transition duration-600 ease-linear transform scale-100 hover:scale-110" src={img} alt={id} />
            </div>
            <h2 className="text-2xl capitalize text-green-700 font-bold py-2">{name}</h2>
            <span className="text-xl font-medium text-gray-900">{workd}</span>
            <p className="text-gray-600">{article.substr(0,150) }</p>
        </div>
    );
};

export default Teacher;