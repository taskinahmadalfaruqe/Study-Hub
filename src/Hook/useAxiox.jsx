import axios from "axios";
const instance = axios.create({
    baseURL:"https://study-hub-bice.vercel.app/newAssignment",
    withCredentials: true,
})
const useAxios=()=>{
    return instance
}
export default useAxios;