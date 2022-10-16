import { getToken } from "../utils/token";
import axios from "axios";

const changePassword = async(payload) => {
    try {
        const {data} = await axios.patch("/api/user/changePassword", payload, {headers: {"token": getToken()}});
        return [data, null];
    } catch (error) {
        return [null, error];      
    }
}

export default changePassword