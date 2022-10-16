const getErrorMessage = (error, message)=> {
    const type = typeof error.response?.data;
    if(type === 'string') return error.response.data;
    return message || "There was some unknown error";
}

export default getErrorMessage;