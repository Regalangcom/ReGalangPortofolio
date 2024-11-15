import Cominsoon1 from "@eli/assets/assetPortofolio/web_event2.png";
import Cominsoon2 from "@eli/assets/assetPortofolio/@@.png";
import Cominsoon3 from "@eli/assets/assetPortofolio/@@2.png";
import Cominsoon4 from "@eli/assets/assetPortofolio/@@@3.png";
import Cominsoon5 from "@eli/assets/assetPortofolio/@@4.png";
import Cominsoon6 from "@eli/assets/assetPortofolio/neo.png";
import Cominsoon7 from "@eli/assets/assetPortofolio/Bio.png";

// Portfolio mapping with additional project info
const Portofolio = () => {
    const PortofolioMapping = [
        {
            id: 1,
            src: Cominsoon1,
            text: "Slicing Design to React JS - A frontend development project where I converted a static design into a dynamic React application.",
            technologies: "React.js, Tailwind CSS, Figma , Responsive Design",
        },
        {
            id: 2,
            src: Cominsoon2,
            text: "Cama Kapu Platform is created to provide digital access for education on violence against girls in East Nusa Tenggara (NTT)",
            technologies: "React.js, laravel{backend}, Api integration  ",
        },
        {
            id: 3,
            src: Cominsoon3,
            text: "Applying TypeScript features to process data from an API.",
            technologies:
                "React Typescript , Fake Store Api, Responsive Design ",
        },
        {
            id: 4,
            src: Cominsoon4,
            text: "building Ecommerce with wordpress powerfull",
            technologies: "Wordpress , Woocomerce , ",
        },
        {
            id: 5,
            src: Cominsoon5,
            text: "Creating a multiple form with CSRF implementation on both the backend and frontend.",
            technologies:
                "React Typescript, Node js , express  js , React hook form , zod  , basic Imple CSRF",
        },
        {
            id: 6,
            src: Cominsoon6,
            text: "Creating a form with authentication and authorization implementation with OTP gmail, along with applying neobrutalism design",
            technologies:
                "React js, Node.js, Express.js , configuration access OTP with Gmail {Nodmailer}",
        },
        {
            id: 7,
            src: Cominsoon7,
            text: "Creating a bio link generator to help fill out your BIO",
            technologies: "React Typescript, Tailwind CSS, Groq Api , Next js",
        },
    ];

    return (
        <div
            name="portofolio"
            className="md:h-screen lg:h-[1000px] bg-gray-50 "
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-3/5 sm:mt-20 mt-16 mt-60">
                <div className="pb-8">
                    <p className="text-3xl inline border-b-4 m-4 text-gray-800 font-bold">
                        Portfolio
                    </p>
                </div>
                <div className="flex flex-wrap">
                    {PortofolioMapping.map(
                        ({ id, src, text, technologies }, i) => (
                            <div
                                id={id}
                                className="w-full md:w-1/2 lg:w-1/3 p-3"
                                key={i}
                            >
                                <div className="shadow-xl rounded-lg w-full h-full flex flex-col overflow-hidden bg-white">
                                    <div className="relative group flex-grow">
                                        {/* Project Image */}
                                        <img
                                            src={src}
                                            alt={`project ${id}`}
                                            loading="lazy"
                                            className="rounded-md w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                                        />
                                        {/* Overlay for Project Text */}
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                            <p className="text-white text-center text-lg font-semibold px-4">
                                                {text}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Project Information */}
                                    <div className="p-4 flex flex-col justify-between flex-grow">
                                        <p className="text-sm text-gray-500 mb-2">
                                            {technologies}
                                        </p>
                                        <div className="flex justify-between items-center mt-auto">
                                            <button className="w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105 bg-blue-600 text-white rounded-lg">
                                                Demo
                                            </button>
                                            <button className="w-1/2  py-3 m-4 duration-200 hover:scale-105 bg-gray-600 text-white rounded-lg">
                                                Source Code
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Portofolio;
