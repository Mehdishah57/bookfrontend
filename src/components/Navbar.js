import React, { useContext } from 'react';
import { Flex, ListItem, UnorderedList, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import { removeToken } from '../utils/token';
import { UserContext } from '../global/UserContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [user, setUser] = useContext(UserContext);
	const navigate = useNavigate();

	const logout = () => {
		removeToken();
		setUser(null);
	}
	
	return (
		<Flex
			bgColor="blackAlpha.800"
			justifyContent="space-between"
			pr={10}
			w="100%"
			h="80px"
		>
			<UnorderedList
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDir="row"
				listStyleType="none"
			>
				<Image src={logo} w="60px" h="60px" />
				<Text ml={4} color="white" fontSize="25px">DIGI Book</Text>
			</UnorderedList>
			<UnorderedList
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDir="row"
				listStyleType="none">
				{user ? <>
					{user.isAdmin && <ListItem onClick={()=>navigate("/adminpanel")} cursor="pointer" fontSize="18px" color="white">Admin Panel</ListItem>}
					<ListItem onClick={()=>navigate("/home")} cursor="pointer" fontSize="18px" color="white" ml={6}>Home</ListItem>
					<ListItem onClick={()=>navigate("/uploadBook")} cursor="pointer" fontSize="18px" color="white" ml={6}>Upload</ListItem>
					<ListItem onClick={()=>navigate("/myBooks")} cursor="pointer" fontSize="18px" color="white" ml={6}>My Books</ListItem>
					<ListItem onClick={()=>navigate("/profile")} cursor="pointer" fontSize="18px" color="white" ml={6}>Profile</ListItem>
					<ListItem onClick={logout} cursor="pointer" fontSize="18px" color="white" ml={6}>Logout</ListItem>
				</>:
				<>
					<ListItem onClick={()=>navigate("/login")} cursor="pointer" fontSize="18px" color="white">Login</ListItem>
					<ListItem onClick={()=>navigate("/register")} cursor="pointer" fontSize="18px" color="white" ml={6}>Register</ListItem>
				</>}
			</UnorderedList>
		</Flex>
	)
}

export default Navbar