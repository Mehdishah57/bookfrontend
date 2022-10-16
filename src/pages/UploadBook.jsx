import React, {useState} from 'react'
import { Formik } from 'formik';
import CustomButton from '../components/CustomButton';
import FormBox from '../components/FormBox';
import FormCheckBox from '../components/FormCheckBox';
import FormSelect from '../components/FormSelect';
import FormTitle from '../components/FormTitle';
import Template from '../components/Template';
import TextInput from '../components/TextInput';
import schema from '../schemas/book';
import addBook from '../services/addBook';
import { useToast } from '@chakra-ui/react';
import getErrorMessage from '../utils/getErrorMessage';

const UploadBook = () => {
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	const handleSubmit = async values => {
		setLoading(true);
		const [data, error] = await addBook(values);
		setLoading(false);
		toast({
			title: data? 'Uploaded Successfully.': 'Failed to upload book',
			description: error?	getErrorMessage(error):`We've uploaded your book for you.`,
			status: data? 'success': 'error',
			duration: 9000,
			isClosable: true,
		});
	}

	return (
		<Template>
			<Formik 
				initialValues={{book: '', name: '', public: false, category: ''}}
				onSubmit={handleSubmit}
				validationSchema={schema}
				>
				{() => <FormBox h='max-content' w='400px'>
					<FormTitle title="Upload Book" />
					<TextInput placeholder="Book name" type='text' fieldName="name" loading={loading} />
					<TextInput type='file' fieldName="book" loading={loading} />
					<FormSelect placeholder='Select Category' fieldName="category" loading={loading} />
					<FormCheckBox text="Make my book public" fieldName="public" loading={loading} />
					<CustomButton disabled={loading} text="Upload" />
				</FormBox>}
			</Formik>
		</Template>
	)
}

export default UploadBook