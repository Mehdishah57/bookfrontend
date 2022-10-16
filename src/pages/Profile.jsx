import React, { useContext } from 'react';
import formBackground from "../assets/b2.jpg";
import {
  Center,
  Button,
  Text,
  Flex
}
  from "@chakra-ui/react";
import { UserContext } from '../global/UserContext';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const [user] = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Center
      bgImage={formBackground}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      h="calc(100vh - 80px)"
    >
      <Flex
        borderRadius={10}
        justifyContent="space-evenly"
        p="10px"
        flexDir="column"
        bgColor="white"
        h="60%"
        w="400px"
      >
        <Text alignSelf="center" color="blackAlpha.800" fontWeight="bold" fontSize="30px" mb={4}>Account Information</Text>
        <Center flexDir="column">
          <Text alignSelf="center" >Email: {user.email}</Text>
          <Text>Name: {user.firstName} {user.lastName}</Text>
        </Center>
        <Button 
          _hover={{ backgroundColor: 'blackAlpha.900' }}
          _active={{backgroundColor: 'blackAlpha.800' }}
					color='white'
					bgColor="blackAlpha.800"
					size='md'
          onClick={()=>navigate("/changePassword")}>Change Password</Button>
      </Flex>
    </Center>
  )
}

export default Profile;