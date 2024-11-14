import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 올바르게 입력해주세요'),
        password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 입력해주세요'),
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userIdIs, setUserIdIs] = useState('');
    const [loginData, setLoginData] = useState(null);

    useEffect(() => {
        const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(storedLoginStatus);
        const storedUserId = localStorage.getItem("userIdIs");
        if (storedUserId) {
            setUserIdIs(storedUserId);
        }
    }, []);

    const fetchUserLogin = async () => {
        const response = await axios.post('http://localhost:3000/auth/login', {
            email: loginData.email,
            password: loginData.password,
        });
        return response.data;
    };

    const { refetch } = useQuery({
        queryKey: ["userLogin", loginData],
        queryFn: fetchUserLogin,
        enabled: false,
    });

    useEffect(()=>{
        if(loginData){
            refetch()
            .then((result)=>{
                if(result.data){
                    const data = result.data
                    localStorage.setItem("accessToken", data.accessToken);
                    localStorage.setItem("refreshToken", data.refreshToken);
                    localStorage.setItem("isLoggedIn", "true");
                    const userEmailId = loginData.email.split('@')[0];
                    setUserIdIs(userEmailId);
                    localStorage.setItem("userIdIs", userEmailId);
                    setIsLoggedIn(true);
                }
            })
            .catch((error)=>{
                setIsLoggedIn(false);
                console.error("로그인 실패", error);
                alert("로그인에 실패했습니다. 에러")
            })
        }
    }, [loginData, refetch])

    const onSubmit =  (data) => {
        setLoginData({ email: data.email, password: data.password });
        try {
            const result = refetch();
            console.log("로그인 성공");
            setIsLoggedIn(true);
            return result.data ? true : false;
            
        } catch (error) {
            console.error("로그인 중 오류 발생:", error);
            setIsLoggedIn(false);
            return false;
        }
    };
    //제출버튼 클릭 시에 홈화면으로 넘어가는 네비게이션 수정하기 - 11/14일

    const logout = () => {
        setIsLoggedIn(false);
        setUserIdIs('');
        localStorage.clear();
    };

    return (
        <LoginContext.Provider
            value={{
                register,
                handleSubmit,
                errors,
                isValid,
                onSubmit,
                isLoggedIn,
                logout,
                userIdIs,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;
