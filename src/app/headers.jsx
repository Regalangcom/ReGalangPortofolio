import { Link } from "react-router-dom";

const Headers = () => {
    return (
        <section className="p-6 rounded-lg">
            <div className="text-2xl font-bold mb-4">
                Hay This is Pages Responsive
            </div>
            <div className="w-full flex flex-col">
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/landingpage"
                            className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                        >
                            Landing Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/inputPage"
                            className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                        >
                            Layout 2
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/residentPage"
                            className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                        >
                            Layout 3
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mt-6">
                <a
                    href="https://www.figma.com/design/t92ExgTQLJZWoELN5z6lni/Untitled?node-id=0-1&t=CpA9xp5FbkXkbi47-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded transition duration-300"
                >
                    View Design on Figma
                </a>
            </div>
        </section>
    );
};

export default Headers;
