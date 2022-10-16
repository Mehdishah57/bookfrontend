import { Text } from '@chakra-ui/react'
import React from 'react'

const FormTitle = ({ title, color = "blackAlpha.800", fontWeight = "bold", fontSize = "30px", mb = 4 }) => {
    return <Text color={color} fontWeight={fontWeight} fontSize={fontSize} mb={mb}>
        {title}
    </Text>

}

export default FormTitle