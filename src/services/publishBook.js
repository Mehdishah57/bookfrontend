import axios from "axios";
import { getToken } from "../utils/token";

const publishBook = async(bookId) => {
    try {
        const {data} = await axios.get(`/api/book/publish/${bookId}`, {headers: {"token":getToken()}})
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default publishBook