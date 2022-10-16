import axios from "axios";

const getCategories = async() => {
    try {
        const {data} = await axios.get("/api/category");
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default getCategories;