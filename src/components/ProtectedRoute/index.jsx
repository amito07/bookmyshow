import React, { useEffect, useState } from "react";
import { currentUser } from "../../apis/user";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate()

  const getUserInfo = async () => {
    const data = await currentUser();
    if (data?.data) {
      setUserInfo(data?.data);
    } else {
      setUserInfo(null);
      navigate('/login')

    }
  };

  useEffect(() => {
    if(localStorage.getItem('token')){
        getUserInfo();
    }else{
        navigate('/login')
    }
  }, []);
  return <div>{children}</div>;
};

export default ProtectedRoute;
