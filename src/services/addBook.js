import { getToken } from "../utils/token";
import axios from "axios";

const addBook = async(payload) => {
    try {
        const {REACT_APP_CLOUD, REACT_APP_PRESET}= process.env;
        const formData = new FormData();
        formData.append("file",payload.book);
        formData.append("upload_preset", REACT_APP_PRESET);
        formData.append("cloud_name",REACT_APP_CLOUD);
        const {data} = await axios.post(`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUD}/upload`, formData);
        const {secure_url, public_id} = data;
        const body = {name: payload.name, category: payload.category, secure_url, public_id, }
        const {data: res} = await axios.post("/api/book", body, {headers: {"token": getToken()}})
        return [res, null]
    } catch (error) {
        return [null, error]
    }
}

export default addBook;