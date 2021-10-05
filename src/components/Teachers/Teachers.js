import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('./teacher.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [])
    return (
        <div>
            <div className=" py-8 bg-red-400 ">
                <div>
                    <span className="text-gray-600"><Link to="/home" className="text-xl text-gray-800">Home / </Link>  Teacher</span>
                </div>
                <h2 className="capitalize text-3xl text-white
                 font-bold">all teachers of our private school</h2>
            </div>
            <div className="container px-10 my-10 mx-auto gap-5  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;