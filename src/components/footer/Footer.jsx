import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import blog from "../../assets/blog.png";
import { AiFillFacebook } from "react-icons/ai";

function Footer() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <footer className="body-font" style={{ background: mode === 'dark' ? '#BB6464' : '#FF6969' }}>
            {/* Left Content  */}
            <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                {/* Blog Logo  */}
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    {/* logo  */}
                    <img className='w-10'
                        src={blog} alt="logo"
                    />
                    {/* logo text  */}
                    <span className="ml-3 text-xl text-grey-800">
                        Shreya
                    </span>
                </div>

                {/* items  */}
                <p className="text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-900 sm:py-2 sm:mt-0 mt-4">
                    © 2023 —
                    <a
                        href="https://twitter.com/ShreyaSen987312"
                        className="text-gray-900 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @titir
                    </a>
                </p>
                

                
            </div>
        </footer>

    )
}

export default Footer
