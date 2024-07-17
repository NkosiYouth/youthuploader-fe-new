import React from 'react';
import { useFormik } from 'formik';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
} from '@chakra-ui/react';
import { MagicLoginFormValues } from '../../types';
import { magicLoginFormSchema } from '../../validators';

interface LoginFormProps {
    onSubmit: (values: MagicLoginFormValues) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    // Formik
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: magicLoginFormSchema,
        onSubmit: (values) => {
            onSubmit(values);
        },
    });

    return (
        <Box width={'100%'}>
            <form onSubmit={formik.handleSubmit}>
                <Heading textAlign={"center"} mb={5}>Magic Login</Heading>
                <FormControl id="email" isInvalid={formik.touched.email && formik.errors.email || false}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <Button mt={4} colorScheme="brand" isLoading={formik.isSubmitting} width={"100%"} type="submit">
                    Send Magic Link
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;
