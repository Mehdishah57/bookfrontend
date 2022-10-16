import axios from "axios";
import { getToken } from "../utils/token";

const getMyBooks = async() => {
    try {
        const {data} = await axios.get("/api/book/my", {headers: {"token": getToken()}});
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default getMyBooks;