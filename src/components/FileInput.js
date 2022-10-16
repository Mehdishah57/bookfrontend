import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { useFormikContext } from 'formik'
import React from 'react'

const TextInput = ({ placeholder, fieldName, size = "md", type = "text", loading }) => {
    const {touched, errors, handleChange, setFieldTouched, setFieldValue} = useFormikContext();
    return (
        <FormControl mb={4} isInvalid={touched[fieldName] && errors[fieldName]}>
            <Input
                placeholder={placeholder}
                type={type}
                size={size}
                disabled={loading}
                onChange={type !== 'file' ? handleChange(fieldName): e => setFieldValue(e.currentTarget.files[0])}
                onBlur={() => setFieldTouched(fieldName)}
            />
            <FormErrorMessage>{touched[fieldName] && errors[fieldName]}</FormErrorMessage>
        </FormControl>
    )
}

export default TextInput