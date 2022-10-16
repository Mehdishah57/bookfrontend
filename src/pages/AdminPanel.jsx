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
    useToast,
    CircularProgress
} from '@chakra-ui/react';
import getUsers from '../services/getUsers';
import MyButton from '../components/MyButton';
import activateUser from '../services/activateUser';
import deleteUser from '../services/deleteUser';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [row, setRow] = useState({});
    const [loading, setLoading] = useState(true);
    const fetchUsers = useRef();
    const toast = useToast();

    fetchUsers.current = async () => {
        const [data] = await getUsers();
        setLoading(false);
        if (data) setUsers(data);
    }

    useEffect(() => {
        fetchUsers.current();
    }, [])

    const handleDelete = async(userId, index)=> {
        setRow({[index]: true});
        const [data, error] = await deleteUser(userId);
        setRow({[index]: false});
        toast({
			title: data? 'User was deleted.': 'Failed to delete user',
			description: error?	`${error.response?.data}`:`We've deleted that user.`,
			status: data? 'success': 'error',
			duration: 9000,
			isClosable: true,
		});
    }

    const handleStatus = async(userId, index) => {
        setRow({[index]: true});
        const [data, error] = await activateUser(userId);
        setRow({[index]: false});
        toast({
			title: data? 'User status updated.': 'Failed to updated user status',
			description: error?	`${error.response?.data}`:`We've changed user's status.`,
			status: data? 'success': 'error',
			duration: 9000,
			isClosable: true,
		});
    }

    if (loading) return <CircularProgress color='blackAplha.800' isIndeterminate />
    return (
        <TableContainer>
            <Table>
                <TableCaption>Book prism users information</TableCaption>
                <Thead>
                    <Th>Name</Th>
                    <Th>Books Count</Th>
                    <Th>Active</Th>
                    <Th></Th>
                </Thead>
                <Tbody>
                    {users.map((user, index) => <Tr key={user._id}>
                        <Td>{user.firstName} {user.lastName}</Td>
                        <Td>{user.bookCount}</Td>
                        <Td>
                            <Checkbox
                                disabled={row[index]}
                                onChange={() => handleStatus(user._id, index)}
                                defaultChecked={user.isActive}>
                                Change Status
                            </Checkbox>
                        </Td>
                        <Td>
                            <MyButton disabled={row[index]} onClick={() => handleDelete(user._id, index)} text="Delete" />
                        </Td>
                    </Tr>)}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default AdminPanel