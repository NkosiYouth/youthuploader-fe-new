import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Sidebar } from './partials'; // Import your Sidebar component

interface DashboardLayoutProps {
  children?: React.ReactNode; // Use ReactNode for more flexibility in children types
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Flex height="100vh">
      {/* Sidebar */}
      <Flex
        as="aside"
        align="center"
        justify="space-between"
        direction="column"
        width="250px"
        backgroundColor="gray.100"
        padding="20px"
      >
        <Sidebar />
      </Flex>

      {/* Main Content */}
      <Flex flex="1" direction="column" padding="20px">
        {children}
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
