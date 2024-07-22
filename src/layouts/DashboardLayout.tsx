import React from "react";
import { Sidebar, Topbar } from "./partials";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  pageTitle?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, pageTitle }) => {
  return (
    <Flex height="100vh">
      <Sidebar />
      <Box width={{ base: "100vw", lg: "calc(100vw - 280px)" }} height="100%">
        <Topbar title={pageTitle || ""} />
        <Box p={8} height={{ base: "90%", lg: "84%" }} overflowY="auto">
          {children ? children : <Outlet />}
        </Box>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
