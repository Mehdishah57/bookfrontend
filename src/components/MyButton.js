import { Button, CircularProgress } from '@chakra-ui/react';
import React from 'react'

const MyButton = ({ 
    onClick, 
    text, 
    disabled, 
    size = "md", 
    bgColor = "blackAlpha.800", 
    color = 'white',
    _hover = {backgroundColor: 'blackAlpha.900'},
    _active = { backgroundColor: 'blackAlpha.800' },
    ...rest
}) => {
    return (
        <Button
            _hover={_hover}
            _active={_active}
            color={color}
            bgColor={bgColor}
            size={size}
            disabled={disabled}
            onClick={onClick} {...rest}>
            {text} {disabled && <CircularProgress ml={1} size={5} color="blackAlpha.900" isIndeterminate />}
        </Button>
    )
}

export default MyButton