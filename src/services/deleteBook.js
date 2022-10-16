import axios from "axios";
import { getToken } from "../utils/token";

const deleteBook = async(id, public_id) => {
    try {
        const {data} = await axios.delete(`/api/book/${id}/${public_id}`,{headers: {"token":getToken()}})
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default deleteBook;