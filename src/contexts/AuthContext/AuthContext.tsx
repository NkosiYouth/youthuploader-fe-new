import { createContext } from 'react';
import { AuthContextType } from '../../types';

// Create the context object
const AuthContext = createContext<AuthContextType| undefined>(undefined);

export default AuthContext;