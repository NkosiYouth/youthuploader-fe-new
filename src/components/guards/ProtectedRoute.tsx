import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { AuthContext } from '../../contexts';
import { Flex, Spinner } from '@chakra-ui/react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext)!;

  if (isLoading) {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Spinner />
      </Flex>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
