import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../img/about-kindergarten.png';

const About = () => {
    return (
        <div>
            <div className="bg-red-400 py-8 ">
                <span className="text-gray-500 text-xl"><Link className="text-gray-900" to="/home">Home /</Link> About </span>
                <h2 className="text-white capitalize font-bold text-3xl">Our all Services</h2>
            </div>
            <div className="container px-5 py-16 mx-auto flex flex-wrap justify-center text-left items-center">
                <div className="lg:w-6/12 pt-10 lg:pt-0 lg:order-1 order-2 w-full">
                    <h2 className="text-3xl text-green-700 font-bold capitalize">This is our offline privet school for children</h2>
                    <p className="text-md text-gray-600 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, possimus ullam neque sequi quidem, magni blanditiis tempora eligendi, debitis vero autem? Earum dolorum quisquam facilis nisi suscipit nostrum. Eum tempora accusantium, dolorem ipsam iste reprehenderit sapiente expedita nostrum autem et amet fuga suscipit temporibus pariatur eveniet est incidunt assumenda hic.</p>
                    <p className="text-md text-gray-600 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, possimus ullam neque sequi quidem, magni blanditiis tempora eligendi, debitis vero autem? Earum dolorum quisquam facilis nisi suscipit nostrum. Eum tempora accusantium, dolorem ipsam iste reprehenderit sapiente expedita nostrum autem et amet fuga suscipit temporibus pariatur eveniet est incidunt assumenda hic.</p>
                    <Link to="/service" className="transition-all duration-500 inline-block py-2 text-xl font-bold px-8 bg-transparent text-red-700 hover:bg-red-500 hover:text-white border-2 border-red-500">See Our Services</Link>
                </div>
                <div className="lg:w-6/12  lg:order-2 order-1 w-full">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;