import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "@eli/assets/assetPortofolio/LoginImage.png";
import useAuth from "@eli/hooks/useAuth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Aos from "aos";
import "aos/dist/aos.css";

const Login = () => {
    const Swals = withReactContent(Swal);
    const navigate = useNavigate();
    const { login, message } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            Swals.fire({
                icon: "error",
                title: "Oops...",
                text: "Email and password are required!",
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            return;
        }

        try {
            const response = await login({ email, password });
            const { success, msg } = response;

            Swal.fire({
                icon: success ? "success" : "error",
                title: success ? msg : msg,
                toast: true,
                text: msg,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });

            // setEmail("");
            // setPassword("");
        } catch (error) {
            console.error("Login error:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: message,
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        }
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
    });

    return (
        <div className=" bg-gray-100 flex flex-col md:flex-row lg:h-screen">
            {/* Left Section */}
            <div className="w-full md:w-1/2 bg-white flex justify-center items-center">
                <div className="w-full">
                    <div
                        data-aos="fade-right"
                        className="flex justify-center items-center h-full"
                    >
                        <img
                            src={LoginImage}
                            alt="Registration"
                            className="h-auto max-h-[900px]"
                        />
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div
                data-aos="fade-left"
                className="max-w-screen-lg mx-auto p-9 flex flex-col items-center justify-center"
            >
                <h3 className="text-xl text-violet-900">Login</h3> {message}
                <span className="text-gray-700">Here</span>
                <form className="w-full max-w-md" onSubmit={loginUser}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded w-full py-2 px-3 shadow-2xl"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded w-full py-2 px-3 shadow-xl"
                            placeholder="Enter your name"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gray-600 text-white py-2 px-4 rounded w-full mt-4 shadow-xl"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mb-6">
                    <p>
                        <p className="text-center mt-4 text-gray-700">
                            Already have an account?{" "}
                            <button
                                onClick={() => navigate("/register")}
                                className="text-violet-900 "
                            >
                                Register
                            </button>
                        </p>
                    </p>
                </div>
            </div>
            <p className="text-center text-gray text-xs mt-4">
                &copy; CreateWebsite by Muhammad Galang Miftah Riziq 2023
            </p>
        </div>
    );
};

export default Login;
