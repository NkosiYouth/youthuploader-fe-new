import React, {  } from 'react';
import { Box, Text } from '@chakra-ui/react';

const MagicLinkSentPage: React.FC = () => {
  return (
    <Box p={4}>
      <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Magic Link sent!
          </Text>
          <Text>Check your inbox and spam folder if you haven't received it.</Text>
        </Box>
    </Box>
  );
};

export default MagicLinkSentPage;
