import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className='flex items-center justify-between p-4 fixed top-0 left-0 z-10 bg-slate-50 w-full'>
            <div className='flex items-center'>
                {/* <div className="logo"><img src={logo} className='size-12 px-2 py-2' alt='logo' /></div> */}
                {isMenuOpen ? (
                    <button
                        onClick={toggleMenu}
                        className="md:hidden px-2 py-2 border border-slate-50 mx-2 border-slate-100 rounded-xl hover:bg-red-600 ease-in-out duration-300">
                        <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                ) : (
                    <button
                        onClick={toggleMenu}
                        className="md:hidden px-2 py-2 border border-slate-50 mx-2 border-slate-100 rounded-xl hover:bg-red-600 ease-in-out duration-300">
                        Menu
                    </button>
                )}
                <ul className={`flex-col md:flex md:flex-row md:items-center ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>

                    <li className='py-2 px-2 cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='py-2 px-2 cursor-pointer'><Link to="/sports">Sports</Link></li>
                    <li className='py-2 px-2 cursor-pointer'><Link to="/entertainment">Entertainment</Link></li>
                    <li className='py-2 px-2 cursor-pointer'><Link to="/business">Business</Link></li>
                    <li className='py-2 px-2 cursor-pointer'><Link to="/health">Health</Link></li>
                    <li className='py-2 px-2 cursor-pointer'><Link to="/science">Science</Link></li>
                    <li className='py-2 px-2 cursor-pointer'><Link to="/technology">Technology</Link></li>
                </ul>
            </div>
            <div className='flex items-center'>
                <div className={`searchBox ${isMenuOpen ? 'hidden' : 'flex'} md:flex py-2 px-2`}>
                    <input type="text" placeholder='search...' className='rounded-xl align-middle text-black px-2' />
                    <button className='SearchBtn px-2 py-2 border border-slate-50 mx-2 border-slate-100 rounded-xl hover:bg-red-600 ease-in-out duration-300'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
