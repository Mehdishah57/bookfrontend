import { Center, CircularProgress } from '@chakra-ui/react';
import React from 'react';
import formBackground from "../assets/b2.jpg";

const Loader = () => {
    return (
        <Center bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center" bgImage={formBackground} w="100%" h="100vh">
            <CircularProgress size={50} color="blackAlpha.900" isIndeterminate />
        </Center>
    )
}

export default Loader