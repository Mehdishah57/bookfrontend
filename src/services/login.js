import axios from "axios";

const login = async(payload) => {
    try {
        const {data} = await axios.post("/api/user/login", payload);
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default login;