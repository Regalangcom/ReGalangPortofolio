/* eslint-disable react/prop-types */
// AuthContext.js
import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

axios.defaults.withCredentials = true;

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [message, setmessage] = useState("");

    const login = async ({ email, password }) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/LoginUser",
                {
                    email,
                    password,
                }
            );
            setUser(response.data.msg);
            setmessage(response.data.msg);
            navigate("/TodoApps");
            return { success: response.data.login, msg: response.data.msg };
        } catch (error) {
            setmessage(error.response.data.msg);
            console.error("Error logging in:", error);
        }
    };

    const Register = async ({
        username,
        email,
        password,
        confirmpassword,
        role,
    }) => {
        try {
            const response = await axios.post("http://localhost:8000/users", {
                username,
                email,
                password,
                confirmpassword,
                role,
            });
            navigate("/login");
            setUser(response.data.msg);
            setmessage(response.data.msg);
            return { success: response.data.register, msg: response.data.msg };
        } catch (error) {
            setmessage(error.response.data.msg);
            console.log(error);
        }
    };

    const CheckSession = async () => {
        try {
            const response = await axios.get("http://localhost:8000/auth");

            if (response.data.user) {
                setUser(response.data.user);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const isAuthenticated = () => {
        return !!user;
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                message,
                // Status,
                login,
                CheckSession,
                Register,
                isAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
