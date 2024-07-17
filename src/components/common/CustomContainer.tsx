import { Container } from "@chakra-ui/react";

interface CustomContainerProps {
    children?: React.ReactNode
}

const CustomContainer: React.FC<CustomContainerProps> = ({ children }) => (
    <Container>
        {children && children}
    </Container>
);

export default CustomContainer;