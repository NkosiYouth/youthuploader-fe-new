export interface LoginWithTokenValues {
    email: string;
    password: string;
}

export interface MagicLoginFormValues{
    email: string;
}

export interface AuthContextType {
    isAuthenticated: boolean;
    loginWithToken: (token: string) => Promise<void>;
    logout: () => void;
    requestMagicLink: (values: MagicLoginFormValues) => Promise<boolean>;
}