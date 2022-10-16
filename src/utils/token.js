const setToken = token => localStorage.setItem("bookprism", token);
const getToken = () => localStorage.getItem("bookprism");
const removeToken = () => localStorage.removeItem("bookprism");

export { setToken, getToken, removeToken }