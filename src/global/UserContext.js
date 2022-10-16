import React, {createContext, useState, useEffect, useRef} from 'react';
import Loader from '../components/Loader';
import refresh from '../services/refresh';

export const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const getUser = useRef();

    getUser.current = async() => {
        setLoading(true);
        const [data] = await refresh();
        if(!data) return setLoading(false);
        setUser(data);
        setLoading(false);
    }

    useEffect(()=>{
        getUser.current();
    },[])

    if(loading) return <Loader />
    return <UserContext.Provider value={[user, setUser]}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;