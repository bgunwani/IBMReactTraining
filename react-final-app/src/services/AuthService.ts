const AuthService = {
    login: (username: string, password: string) => {
        if (username === "admin" && password === "password") {
            localStorage.setItem("auth", "true")
            return true;
        }
        return false;
    },

    logout: () => {
        localStorage.removeItem("auth");
    },

    isAuthenticated: () => {
        return localStorage.getItem("auth") === "true";
    }
}

export default AuthService;