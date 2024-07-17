import { useContext } from "react";
import { LoginForm } from "../../components";
import { MagicLoginFormValues } from "../../types";
import { AuthContext } from "../../contexts";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";


const LoinPage: React.FC = () => {
    const { requestMagicLink } = useContext(AuthContext)!;

    const toast = useToast();
    const navigte = useNavigate();

    const onLogin = async (values: MagicLoginFormValues) => {
        let isMagicLinkSent = await requestMagicLink(values);
        console.log(isMagicLinkSent);
        if(isMagicLinkSent){
            toast({
                title: "Magic link sent!",
                description: "Check your email for magic link!",
                position: 'top-right',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            setTimeout(() => {
                navigte(ROUTES.MAGIC_LINK_SENT)
            }, 300);
        } else{
            toast({
                title: "Error",
                description: "Encountered an error while sending magic link!",
                position: 'top-right',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }

    return (
        <LoginForm onSubmit={onLogin} />
    )
}
export default LoinPage;