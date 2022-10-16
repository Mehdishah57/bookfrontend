import axios from "axios";
import { getToken } from "../utils/token";

const activateUser = async(userId) => {
    try {
        const {data} = await axios.get(`/api/user/status/${userId}`, {headers: {"token":getToken()}})
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default activateUser;