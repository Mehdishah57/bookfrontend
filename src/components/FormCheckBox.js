import { Checkbox, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { useFormikContext } from 'formik'
import React from 'react'

const FormCheckBox = ({ fieldName, text, loading }) => {
    const {touched, errors, setFieldValue} = useFormikContext();
    return (
        <FormControl mb={4} isInvalid={touched[fieldName] && errors[fieldName]}>
            <Checkbox disabled={loading} onChange={e => setFieldValue(fieldName,e.currentTarget.checked)}>
                {text}
            </Checkbox>
            <FormErrorMessage>{touched[fieldName] && errors[fieldName]}</FormErrorMessage>
        </FormControl>
    )
}

export default FormCheckBox;