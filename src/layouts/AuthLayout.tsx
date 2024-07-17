import { Box, Heading, Image, HStack, Text, VStack } from "@chakra-ui/react";
import logo from "../assets/logo-white-transparent.png";

interface AuthLayoutProps {
    children?: React.ReactElement;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <HStack
            bg={"#2f3640"}
            bgRepeat={"none"}
            bgSize={"contain"}
            height={"100vh"}
            width={"100%"}
        >
            <Box width={"50%"} height={"100%"} bg={"#fff"}>
                <VStack
                    height={"100vh"}
                    width={"100%"}
                    mx={"auto"}
                    py={'90px'}
                    px={'20%'}
                    justifyContent={"center"}
                    alignItems={'center'}
                >
                    {children && children}
                </VStack>
            </Box>
            <Box width={"50%"} height={"100%"}>
                <VStack
                    height={"100%"}
                    width={"70%"}
                    mx={"auto"}
                    textAlign={"center"}
                    alignContent={"center"}
                    justifyContent={"center"}
                >
                    <Image src={logo} alt="Portal Youth"/>
                    <Heading color={"#FFF"}>Welcome to Document Processor</Heading>
                    <Text color={"#FFF"}>
                        Revolutionize your document management with Document Processor, your ultimate solution for transforming physical documents into digital assets effortlessly.
                    </Text>
                </VStack>
            </Box>
        </HStack>
    );
}

export default AuthLayout;