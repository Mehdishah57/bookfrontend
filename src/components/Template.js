import { Center } from '@chakra-ui/react';
import formBackground from "../assets/b2.jpg";
import React from 'react'

const Template = ({children, ...rest}) => {
    return (
        <Center
            bgImage={formBackground}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center"
            h="calc(100vh - 80px)"
            {...rest}
        >
            {children}
        </Center>
    )
}

export default Template