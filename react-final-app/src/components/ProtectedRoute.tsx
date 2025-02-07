import React from "react";
import AuthService from "../services/AuthService";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    return AuthService.isAuthenticated() ?
        React.createElement(React.Fragment, null, children) :
        React.createElement(Navigate, { to: "/Login" });
}

export default ProtectedRoute;