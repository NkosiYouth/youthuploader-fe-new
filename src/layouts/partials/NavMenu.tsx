import { HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MENU_ITEMS } from "../../constants";

export default function NavMenu() {
  return (
    <Stack gap={3}>
      {MENU_ITEMS.map((item, i) => {
        return (
          <Link
            key={i}
            as={NavLink}
            to={item.link}
            role="group"
            _activeLink={{
              "& > div": { backgroundColor: "gray.100" },
              "& > div svg": { color: "black" },
              "& > div p": { color: "black" },
            }}
            style={{ textDecoration: "none" }}
          >
            <HStack
              gap={3}
              py={3}
              px={4}
              rounded="xl"
              color="gray"
              _groupHover={{ color: "black" }}
            >
              <Icon as={item.icon} fontSize="xl" />
              <Text fontSize="sm">{item.title}</Text>
            </HStack>
          </Link>
        );
      })}
    </Stack>
  );
}
