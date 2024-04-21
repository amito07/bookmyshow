import { axiosInstance } from ".";

export const currentUser = async () => {
  try {
    const result = await axiosInstance.get("/user/me");
    if (result) {
      return result?.data;
    } else return [];
  } catch (error) {
    return error;
  }
};
