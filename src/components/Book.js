import { Button, Center, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../global/UserContext';

const Book = ({ book }) => {
    const [user] = useContext(UserContext);
    const navigate = useNavigate();
    if (!book) return null;

    const downloadBook = () => window.open(book.secure_url)

    return (
        <Center flexDir="column">
            <Center
                _hover={{ bgColor: 'blackAlpha.800' }}
                transition="all 0.2s ease-in-out"
                flexDir="column"
                bgColor="brown"
                h="250px"
                w="200px"
                cursor="pointer"
                overflow="hidden"
                borderRadius={30}
                pos='relative'
                m={5}
                onClick={() => navigate(`/bookSpeech/${book._id}`)}>
                <Text color="white">Name: {book.name}</Text>
                {book?.category && <Text color="white">Category: {book.category.name}</Text>}
                {user._id === book.owner && <Button pos='absolute' top='-10px' _hover={{ bgColor: 'brown' }} zIndex={999999} color="white" bgColor="black">My Book</Button>}
            </Center>
            <Button onClick={downloadBook} w="100px">Download</Button>
        </Center>
    )
}

export default Book