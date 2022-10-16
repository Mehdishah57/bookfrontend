import { createContext, useEffect, useRef, useState } from "react";
import getCategories from "../services/getCategories";

export const CategoryContext = createContext(null);

const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const fetchCategories = useRef();

    fetchCategories.current = async() => {
        const [data] = await getCategories();
        if(data) setCategories(data);
    }

    useEffect(()=>{
        fetchCategories.current();
    },[])

    return <CategoryContext.Provider value={[categories, setCategories]}>
        {children}
    </CategoryContext.Provider>
}

export default CategoryProvider;