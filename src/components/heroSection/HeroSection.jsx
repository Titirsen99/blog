import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import blog from "../../assets/blog.png";


function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? '#7D7463' : '#FED7AA' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src={blog} height={100} width={100} alt="" />
                            </div>

                            {/* Text  */}
                            <h1 className=' text-3xl #fb2e01 font-bold'>Titir</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : '#fb2e01' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Here are some blogs contributed by Titir.
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection
