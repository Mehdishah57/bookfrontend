import React, { useContext, useState } from 'react';
import { Center, Text, useToast } from "@chakra-ui/react";
import { Formik } from 'formik';
import schema from '../schemas/login';
import { useNavigate } from 'react-router-dom';
import login from '../services/login';
import { UserContext } from '../global/UserContext';
import { setToken } from '../utils/token';
import TextInput from '../components/TextInput';
import Template from '../components/Template';
import FormBox from '../components/FormBox';
import CustomButton from '../components/CustomButton';
import FormTitle from '../components/FormTitle';

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [, setUser] = useContext(UserContext);
	const navigate = useNavigate();
	const toast = useToast();

	const handleSubmit = async values => {
		setLoading(true);
		const [data, error] = await login(values);
		setLoading(false);
		toast({
			title: data? 'Login Successfull.': 'Failed to login in',
			description: error?	`${error.response?.data}`:`We've logged you into your account.`,
			status: data? 'success': 'error',
			duration: 9000,
			isClosable: true,
		});
		if(!data) return;
		setUser(data.user);
		setToken(data.token);
	}

	return (
		<Template>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				{() => <FormBox>
					<FormTitle title="SIGN IN" />
					<TextInput placeholder="Email" fieldName="email" type="email" />
					<TextInput placeholder="Password" fieldName="password" type="password" />
					<CustomButton text="Login" disabled={loading} />
					<Center mt={4}>
						<Text color="blackAlpha.800" fontWeight="bold">Dont have an account?</Text>
						<Text onClick={() => navigate("/register")} cursor="pointer" color="blue.500" fontWeight="bold" ml={1}>Register</Text>
					</Center>
				</FormBox>}
			</Formik>
		</Template>
	)
}

export default Login;