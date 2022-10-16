import axios from "axios";
import { getToken } from "../utils/token";

const getBooks = async() => {
    try {
        const {data} = await axios.get("/api/book", {headers: {"token": getToken()}});
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default getBooks;