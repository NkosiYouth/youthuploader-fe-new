import React, { useContext } from "react";
import { Box, Heading, Avatar, Menu, MenuButton, MenuList, MenuItem, Flex, Spacer } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { AuthContext } from "../../contexts";

interface TopbarProps {
  title: string;
}

const Topbar: React.FC<TopbarProps> = ({ title }) => {
  const { user, logout } = useContext(AuthContext)!;

  const handleLogout = () => {
    logout();
  };

  const handleProfile = () => {
    // Implement your profile navigation logic here
    console.log("Profile clicked");
  };

  return (
    <Box
      ps={{ base: 16, lg: 6 }}
      pe={8}
      py={{ base: 4, lg: 4 }}
      borderBottomWidth={1}
    >
      <Flex alignItems="center">
        <Heading as="h2" fontSize={'lg'} fontWeight="semibold">
          {title}
        </Heading>
        <Spacer />
        <Menu>
          <MenuButton as={Box} cursor="pointer">
            <Flex alignItems={'center'} gap={2}>
              <Avatar size="sm" name={`${user?.firstName} ${user?.lastName}`} src="path_to_avatar_image.jpg" />
              <BiChevronDown fontSize={'20px'} />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Topbar;
