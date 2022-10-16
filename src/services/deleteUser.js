import axios from "axios";
import { getToken } from "../utils/token";

const deleteUser = async(userId) => {
    try {
        const {data} = await axios.delete(`/api/user/${userId}`, {headers: {"token":getToken()}})
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default deleteUser;