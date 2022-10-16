import axios from "axios";
import { getToken } from "../utils/token";

const getText = async(id, page) => {
    try {
        const {data} = await axios.get(`/api/book/text/${id}/${page}`, {headers: {"token": getToken()}});
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default getText;