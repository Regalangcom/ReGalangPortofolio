// import React from "react";
import heroBannerImage from "@eli/assets/assetPortofolio/ImageBanner.jpeg";

import { BsLinkedin } from "react-icons/bs";
import { AiFillMediumCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { CiTimer } from "react-icons/ci";

const HeroBanner = () => {
    const [Time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date(), 30000));
    }, []);

    return (
        <div name="home" className="md:h-screen lg:h-[800px]">
            <div className="mt-28 flex flex-row  justify-end items-center w-5/6 ">
                <MdDateRange />{" "}
                <p>
                    {Time.toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
                |<CiTimer />
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
            {/* React-helmet-async */}
            <Helmet>
                {/* <meta
                         httpEquiv="Content-Security-Policy"
                         content={`
                         default-src 'self';
                         script-src 'self';
                         img-src 'self'
                   `}
                    ></meta> */}
            </Helmet>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full lg:mt-10 md:mt-70">
                    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-3/5">
                        <div className="pb-8">
                            <h1 className="text-3xl sm:text-4xl font-bold">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                        strings: ["I'am Fullstack JavaScript"],
                                    }}
                                />
                            </h1>
                            <p className="text-3xl mb-6 inline border-b-4"></p>
                        </div>
                        <p className="py-4 max-w-md md:justify-center items-center  lg:mt-4 ">
                            I am ready to contribute to your company, determined
                            and committed to always learning, learning, and
                            studying things related to the frontend engineering
                            and software developer fields For more details about
                            me, please click the button below.....
                        </p>
                    </div>
                    {/* <h2 className="t">
                              
                         </h2>
                         <p className="">
                              
                         </p> */}
                    <div className="mb-6 mt-3  flex m-5 space-x-2 text-sm ">
                        <button className="rounded-lg px-4 py-1 bg-slate-900 text-white flex items-center hover:bg-slate-600">
                            <a href="www.linkedin.com/in/muhammad-galang-miftah-riziq">
                                connect
                            </a>
                            <BsLinkedin className="ml-2" />
                        </button>
                        <button className="rounded-lg px-4  py-1 bg-slate-900 text-white flex items-center hover:bg-slate-600">
                            <a href="https://medium.com/@galangmiftah03">
                                Medium
                            </a>
                            <AiFillMediumCircle className="ml-2" />
                        </button>
                        <button className="rounded-lg px-4 py-1 bg-slate-900 text-white flex items-center hover:bg-slate-600">
                            <a href="https://github.com/Regalangcom?tab=repositories">
                                Github
                            </a>
                            <BsGithub className="ml-2" />
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src={heroBannerImage}
                        alt=""
                        style={{ width: "300px" }}
                        className="rounded-2xl mx-auto w-2/3 md:flex-full mb-8"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
