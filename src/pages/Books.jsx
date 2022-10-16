import { CircularProgress, Flex, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import Book from '../components/Book';
import Template from '../components/Template'
import getBooks from '../services/getBooks';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const fetchBooks = useRef()

    fetchBooks.current = async () => {
        const [data] = await getBooks();
        setLoading(false);
        if (data) setBooks(data);
    }

    useEffect(() => {
        fetchBooks.current();
    }, [])

    useEffect(() => {
        setSearchBooks(books.filter(book => book.name.toLowerCase().indexOf(search.toLowerCase()) !== -1))
    }, [search, books])

    const handleChange = e => setSearch(e.currentTarget.value);

    if (loading) return <Template>
        <CircularProgress color='blackAlpha.900' isIndeterminate />
    </Template>
    return (
        <Template pos='relative' overflow='hidden' flexDir="column">
            <Flex pos='absolute' top='10px' bgColor="white" w="60%" borderRadius={5}>
                <Input bg={null} value={search} onChange={handleChange} placeholder='Search' />
            </Flex>
            <Flex overflow='hidden' flexWrap="wrap">
                {search ?
                    searchBooks.map(book => <Book key={book._id} book={book}></Book>)
                    : books.map(book => <Book key={book._id} book={book}></Book>)}
            </Flex>
        </Template>
    )
}

export default Books