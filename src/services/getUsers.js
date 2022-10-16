import axios from "axios";
import { getToken } from "../utils/token";

const getUsers = async() => {
    try {
        const {data} = await axios.get("/api/user", {headers: {"token": getToken()}});
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default getUsers