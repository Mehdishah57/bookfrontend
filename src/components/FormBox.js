import { Center } from '@chakra-ui/react';
import React from 'react'

const FormBox = ({ children, h="60%", w="350px" }) => {
    return (
        <Center borderRadius={10} p="10px" flexDir="column" bgColor="white" h={h} w={w}>
            {children}
        </Center>
    )
}

export default FormBox