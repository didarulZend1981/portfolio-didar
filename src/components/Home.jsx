import React from 'react';
import Img from '../assets/Willie.png'
import circle from '../assets/circle.png'
import img2 from '../assets/img2.png'
import { Link } from 'react-scroll';

const Home = () => {
    
    return (
        <div className='md:px-10 px-7 my-14 md:h-screen bg-[white]' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    {/* image & content */}
                    {/* text */}
                    <div className='text-black'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Willie Garrett</h1>
                        <p className='md:w-96'>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</p>
                        <div className='mt-5'>
                        
                            <button className='btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-red hover:text-red'><a href="/sample.txt" download="Sample_File.txt" className="download-link">Download CV</a></button> 
                            
                        </div>
                    </div>
                    {/* img */}
                    <div className='order-first md:order-last relative'>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className='h-24 bg-[white] w-full mx-auto absolute left-0 hidden md:block'>
            </div>
        </div>
    );
};

export default Home;