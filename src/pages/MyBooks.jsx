import React, { useEffect, useRef, useState } from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Checkbox,
	Button,
	useToast,
	CircularProgress,
} from '@chakra-ui/react';
import getMyBooks from '../services/getMyBooks';
import deleteBook from '../services/deleteBook';
import publishBook from '../services/publishBook';

const MyBooks = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const fetchBooks = useRef();
	const toast = useToast();

	fetchBooks.current = async() => {
		const [data] = await getMyBooks();
		setLoading(false);
		if(data) setBooks(data);
	}

	useEffect(()=>{
		fetchBooks.current();
	},[])

	const handleDelete = async(id, public_id) => {
		setBooks(books => books.filter(book => book._id !== id));
		const [data, error] = await deleteBook(id, public_id);
		toast({
			title: data? 'Book deleted.': 'Failed to delete book',
			description: error?	`${error.response?.data}`:`We've deleted your book for you.`,
			status: data? 'success': 'error',
			duration: 9000,
			isClosable: true,
		});
	}

	const handlePublish = async(e,bookId) => {
		const [data, error] = await publishBook(bookId);
		const text = e.target.checked ? "public": "private"
		toast({
			title: data? 'Book Status Updated.': 'Failed to updated book status',
			description: error?	`${error.response?.data}`:`We've made your book ${text}.`,
			status: data? 'success': 'error',
			duration: 9000,
			isClosable: true,
		});
	}

	if(loading) return <CircularProgress color='blackAplha.800' isIndeterminate></CircularProgress>
	return (
		<TableContainer>
			<Table variant='striped' colorScheme='facebook'>
				<TableCaption>{books.length ? "List of your books": "You have never uploaded any book"}</TableCaption>
				{books.length ? <><Thead>
					<Tr>
						<Th>Book name</Th>
						<Th>Book url</Th>
						<Th>Published</Th>
						<Th>Category</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{books.map(book => <Tr key={book._id}>
						<Td>{book.name}</Td>
						<Td>{book.secure_url}</Td>
						<Td>
							<Checkbox defaultChecked={book.isPublished} onChange={(e)=>handlePublish(e,book._id)} colorScheme="orange" defaultValue={book.isPublished}>Published</Checkbox>
						</Td>
						<Td>{book.category.name}</Td>
						<Td>
							<Button colorScheme="red" onClick={()=>handleDelete(book._id,book.public_id)}>Delete</Button>
						</Td>
					</Tr>)}
				</Tbody></>: null}
			</Table>
		</TableContainer>
	)
}

export default MyBooks