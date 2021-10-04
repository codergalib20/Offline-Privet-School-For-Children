import React from 'react';

const Slider = () => {
    const HomeSlider = {
        background: 'linear-gradient(rgba(51, 51, 51, 0.719),rgba(51, 51, 51, 0.719)),url(https://i.ibb.co/VmmGTkM/slide1.jpg) no-repeat top center',
        backgroundSize: 'cover'
    }
    return (
            <div>
                <div className="h-screen flex items-center text-left"  style={HomeSlider}>
                    <div className="container px-2 mx-auto ">
                        <h3 className="mb-3 text-white md:text-2xl sm:text-xl text-lg">SIMPLE AND EASY TO USE</h3>
                        <h2 className="mb-3 lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white">PERFECT THEMES FOR YOUR</h2>
                        <h2 className="mb-3 lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white">KINDERGARDEN SITE</h2>
                        <p className="mb-3 sm:text-lg text-md text-white text-bold italic">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam.</p>
                        <button className="transition-all duration-400 ease-in-out flex items-center justify-center py-2 px-10 border-2 border-red-500 bg-transparent hover:bg-red-500 text-white text-lg">Read more '<i class="fas fa-arrow-right"></i></button>
                    </div>    
            </div>
            <div className="py-10 bg-red-400">
                    <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl  font-bold text-white">WELCOME TO THE ‘KINDERGARTEN’ WORDPRESS THEME</h1>
            </div>
        </div>
    );
};

export default Slider;