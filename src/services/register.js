import axios from "axios";

const register = async(payload) => {
    try {
        const {data} = await axios.post("/api/user/register", payload);
        return [data, null];
    } catch (error) {
        return [null, error];
    }
}

export default register;