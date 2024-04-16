import { axiosInstance } from "."
export const logInAPI = async(data) =>{
    try {
        const result = await axiosInstance.post('/user/signIn', data)
        return result?.data
    } catch (error) {
        return error.response
        
    }
}