import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Center, Spinner, Text, useToast } from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts';
import { ROUTES } from '../../constants';

interface MagicLinkVerifyPageProps {}

const MagicLinkVerifyPage: React.FC<MagicLinkVerifyPageProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  const { loginWithToken, isAuthenticated } = useContext(AuthContext)!;

  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const verifyToken = async () => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      try {
        await loginWithToken(token);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "Error",
          description: "An error occurred while verifying the token.",
          status: "error",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      setIsLoading(false);
      toast({
        title: "Invalid token",
        description: "Token is missing. Please check your link and try again.",
        status: "error",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    verifyToken();
  }, [location.search]);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        setIsVerified(true);
        setTimeout(() => {
          navigate(ROUTES.DASHBOARD);
        }, 2000);
      } else {
        toast({
          title: "Authentication failed",
          description: "The token could not be verified. Please try again.",
          status: "error",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  }, [isLoading, isAuthenticated, navigate, toast]);

  return (
    <Box p={4}>
      {isLoading ? (
        <Center h="200px">
          <Spinner size="xl" />
        </Center>
      ) : (
        <Box>
          {isVerified ? (
            <>
              <Text fontSize="xl" fontWeight="bold">
                Magic Link Verified Successfully!
              </Text>
              <Text>Your account has been verified. Redirecting you to the dashboard...</Text>
            </>
          ) : (
            <Box textAlign="center">
              <Text fontSize="xl" fontWeight="bold">
                Invalid or missing token.
              </Text>
              <Text mb={4}>Token is missing. Try again.</Text>
              <Button colorScheme="brand" width="100%" to={ROUTES.LOGIN} as={Link}>
                Login
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default MagicLinkVerifyPage;
