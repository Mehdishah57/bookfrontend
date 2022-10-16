import React,{ useContext, useState } from 'react';
import { 
	Center, 
	Text, 
	useToast, 
} from "@chakra-ui/react";
import { Formik } from 'formik';
import schema from '../schemas/register';
import { useNavigate } from 'react-router-dom';
import register from '../services/register';
import { setToken } from '../utils/token';
import { UserContext } from '../global/UserContext';
import Template from '../components/Template';
import FormTitle from '../components/FormTitle';
import TextInput from '../components/TextInput';
import CustomButton from '../components/CustomButton';
import FormBox from '../components/FormBox';

const Register = () => {
	const [loading, setLoading] = useState(false);
	const[,setUser] = useContext(UserContext);
	const navigate = useNavigate();
	const toast = useToast();

	const handleSubmit = async values => {
		setLoading(true);
		const [data, error] = await register(values);
		setLoading(false);
		toast({
			title: data? 'Account created.': 'Failed to create account',
			description: error?	`${error.response?.data}`:`We've created your account for you.`,
			status: data? 'success': 'error',
			duration: 9000,
			isClosable: true,
		});
		setUser(data.user);
		setToken(data.token);
		if(data) navigate("/profile");
	}

	return (
		<Template>
			<Formik
				initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				{() => <FormBox h='max-content' w='400px'>
					<FormTitle title="SIGN UP" />
					<TextInput placeholder="First name" fieldName="firstName" />
					<TextInput placeholder="Last  name" fieldName="lastName" />
					<TextInput placeholder="Email" fieldName="email" />
					<TextInput placeholder="Password" fieldName="password" type="password" />
					<TextInput placeholder="Confirm password" fieldName="confirmPassword" type="password" />
					<CustomButton text="Create my account" disabled={loading} />
					<Center mt={4}>
						<Text color="blackAlpha.800" fontWeight="bold">Dont have an account?</Text>
						<Text onClick={() => navigate("/login")} cursor="pointer" color="blue.500" fontWeight="bold" ml={1}>Login</Text>
					</Center>
				</FormBox>}
			</Formik>
		</Template>
	)
}

export default Register;