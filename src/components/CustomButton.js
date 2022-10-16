import { Button, CircularProgress } from '@chakra-ui/react';
import { useFormikContext } from 'formik'
import React from 'react'

const CustomButton = ({ 
    onClick, 
    text, 
    disabled, 
    size = "md", 
    bgColor = "blackAlpha.800", 
    color = 'white',
    _hover = {backgroundColor: 'blackAlpha.900'},
    _active = { backgroundColor: 'blackAlpha.800' }
}) => {
    const { handleSubmit } = useFormikContext();
    return (
        <Button
            _hover={_hover}
            _active={_active}
            color={color}
            bgColor={bgColor}
            size={size}
            disabled={disabled}
            onClick={onClick || handleSubmit}>
            {text} {disabled && <CircularProgress color="blackAlpha.900" isIndeterminate />}
        </Button>
    )
}

export default CustomButton