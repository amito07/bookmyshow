import { axiosInstance } from "../../apis";

export const createUser = async (data) => {
    console.log(data)
    const result = await axiosInstance.post('/user/signIn', data)
    return result?.data
};

export const getUserInfo = async() =>{
    const result = await axiosInstance.get('/user/me')
    console.log(result)
    return result?.data
}
