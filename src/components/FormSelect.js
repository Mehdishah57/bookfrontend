import { FormControl, FormErrorMessage, Select } from '@chakra-ui/react'
import { useFormikContext } from 'formik'
import React, { useContext } from 'react'
import { CategoryContext } from '../global/CategoryContext';

const FormSelect = ({ placeholder="Select an option", fieldName, size = "md", loading }) => {
    const { touched, errors, handleChange, setFieldTouched } = useFormikContext();
    const [categories] = useContext(CategoryContext);

    return (
        <FormControl mb={4} isInvalid={touched[fieldName] && errors[fieldName]}>
            <Select disabled={loading} onBlur={()=>setFieldTouched(fieldName)} onChange={handleChange(fieldName)} placeholder={placeholder}>
                {categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}
            </Select>
            <FormErrorMessage>{touched[fieldName] && errors[fieldName]}</FormErrorMessage>
        </FormControl>
    )
}

export default FormSelect;