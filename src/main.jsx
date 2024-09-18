import React from "react";
import ReactDOM from "react-dom/client";
import App from "@eli/App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { QueryClientProvider, QueryClient } from "react-query";

axios.defaults.withCredentials = true;
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <HelmetProvider>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </HelmetProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
