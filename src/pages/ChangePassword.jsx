import React, { useState } from 'react';
import formBackground from "../assets/b2.jpg";
import { Center, Input, Button, Text, FormErrorMessage, FormControl, useToast } from "@chakra-ui/react";
import { Formik } from 'formik';
import schema from '../schemas/changePassword';
import changePassword from '../services/changePassword';

const ChangePassword = () => {
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	const handleSubmit = async values => {
		setLoading(true);
		const [data, error] = await changePassword(values);
		setLoading(false);
		toast({
			title: data? 'Password Changed.': 'Failed to change password',
			description: error?	`${error.response?.data}`:`We've changed your password for you.`,
			status: data? 'success': 'error',
			duration: 9000,
			isClosable: true,
		});
	}

	return (
		<Center
			bgImage={formBackground}
			bgRepeat="no-repeat"
			bgSize="cover"
			bgPos="center"
			h="calc(100vh - 80px)">
			<Formik
				initialValues={{ oldPassword: '', newPassword: '', confirmPassword: '' }}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				{({ handleSubmit, handleChange, errors, touched, setFieldTouched }) => <Center
					borderRadius={10} p="10px" flexDir="column" bgColor="white" h="60%" w="350px"
				>
					<Text color="blackAlpha.800" fontWeight="bold" fontSize="30px" mb={4}>Change Password</Text>
					<FormControl mb={4} isInvalid={touched.oldPassword && errors.oldPassword}>
						<Input
							placeholder='Old Password'
							type="password"
							size='md'
							disabled={loading}
							onChange={handleChange("oldPassword")}
							onBlur={() => setFieldTouched("oldPassword")}
						/>
						<FormErrorMessage>{touched.oldPassword && errors.oldPassword}</FormErrorMessage>
					</FormControl>
					<FormControl mb={4} isInvalid={touched.newPassword && errors.newPassword}>
						<Input
							placeholder='New Password'
							type="password"
							size='md'
							disabled={loading}
							onChange={handleChange("newPassword")}
							onBlur={() => setFieldTouched("newPassword")}
						/>
						<FormErrorMessage>{touched.newPassword && errors.newPassword}</FormErrorMessage>
					</FormControl>
					<FormControl mb={4} isInvalid={touched.confirmPassword && errors.confirmPassword}>
						<Input
							placeholder='Confirm password'
							type="password"
							size='md'
							disabled={loading}
							onChange={handleChange("confirmPassword")}
							onBlur={() => setFieldTouched("confirmPassword")}
						/>
						<FormErrorMessage>{touched.confirmPassword && errors.confirmPassword}</FormErrorMessage>
					</FormControl>
					<Button
						_hover={{ backgroundColor: 'blackAlpha.900' }}
						_active={{ backgroundColor: 'blackAlpha.800' }}
						color='white'
						bgColor="blackAlpha.800"
						size='md'
						disabled={loading}
						onClick={handleSubmit}>
						Change Password
					</Button>
				</Center>}
			</Formik>
		</Center>
	)
}

export default ChangePassword