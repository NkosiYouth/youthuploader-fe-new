import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { AuthContext } from '../../contexts';
import { Flex, Spinner } from '@chakra-ui/react';
interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext)!;

  if (isLoading) {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Spinner />
      </Flex>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} />;
  }

  return <>{children}</>;
};

export default PublicRoute;
