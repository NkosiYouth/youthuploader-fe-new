import React, { useEffect, useState, useCallback } from "react";
import { AuthContextType, MagicLoginFormValues } from "../../types";
import AuthContext from "./AuthContext";
import useFetchData from "../../hooks/useFetchData";

// AuthProvider component to wrap your application
interface AuthProviderProps {
    children?: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<any>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
                setUser(userData); // Update user state
            }
        } catch (error) {
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(undefined);
    };

    const loadTokenWithUser = useCallback(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');

        if (storedUser && storedToken) {
            const user = JSON.parse(storedUser);
            setUser(user);
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        loadTokenWithUser();
    }, [loadTokenWithUser]);

    useEffect(() => {
        console.log(user, isAuthenticated);
    }, [user, isAuthenticated]);

    const authContextValue: AuthContextType = {
        isAuthenticated,
        loginWithToken,
        requestMagicLink,
        logout,
        isLoading,
        user
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
