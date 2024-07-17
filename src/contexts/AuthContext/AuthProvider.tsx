import React, { useEffect, useState } from "react";
import { AuthContextType, MagicLoginFormValues } from "../../types";
import AuthContext from "./AuthContext";
import useFetchData from "../../hooks/useFetchData";

// AuthProvider component to wrap your application
interface AuthProviderProps {
    children?: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [_user, setUser] = useState<any>(undefined);

    const { postItem, loading, error } = useFetchData<any>('/auth/request-magic-login');

    const requestMagicLink = async (values: MagicLoginFormValues): Promise<boolean> => {
        try {
            await postItem(values, '/auth/request-magic-login');
            return true;
        } catch (error) {
            console.log("Error", error);
            return false;
        }
    };

    const loginWithToken = async (token: string): Promise<void> => {
        try {
            let userData = await postItem({}, '/auth/verify-token', { token });
            if (error === null && !loading) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(userData));
                setIsAuthenticated(true);
            }

        } catch (error) {
            setIsAuthenticated(false);
        }
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    const loadTokenWithUser = () => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');

        if (storedUser && storedToken) {
            const user = JSON.parse(storedUser);
            setUser(user);
            setIsAuthenticated(true);
        }
    }

    useEffect(() => {
        loadTokenWithUser();
    }, []);

    const authContextValue: AuthContextType = {
        isAuthenticated,
        loginWithToken,
        requestMagicLink,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
