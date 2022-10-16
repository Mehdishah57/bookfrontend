import axios from "axios";
import { getToken } from "../utils/token";

const refresh = async() => {
    try {
        const {data} = await axios.get("/api/user/refresh", {headers: {"token":getToken()}});
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default refresh;