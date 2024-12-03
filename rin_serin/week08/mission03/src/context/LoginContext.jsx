import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
    const schema = yup.object().shape({
        email: yup.string().email("올바른 이메일 형식이 아닙니다.").required("이메일을 올바르게 입력해주세요"),
        password: yup.string()
            .min(8, "비밀번호는 8자 이상이어야 합니다.")
            .max(16, "비밀번호는 16자 이하여야 합니다.")
            .required("비밀번호를 입력해주세요"),
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userIdIs, setUserIdIs] = useState("");

    // 초기 상태 설정
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(storedLoginStatus);
        const storedUserId = localStorage.getItem("userIdIs");
        if (storedUserId) {
            setUserIdIs(storedUserId);
        }
    }, []);

    // useMutation을 활용한 로그인 처리
    const loginMutation = useMutation({
        mutationFn: async (loginData) => {
            const response = await axios.post("http://localhost:3000/auth/login", {
                email: loginData.email,
                password: loginData.password,
            });
            return response.data;
        },
        onSuccess: (data) => {
            // 성공 처리
            console.log("로그인 성공", data);
        },
        onError: (error) => {
            // 에러 처리
            console.error("로그인 실패", error);
        },
    });
    

    const onSubmit = (data) => {
        loginMutation.mutate(data); // mutate를 통해 데이터 전송
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserIdIs("");
        localStorage.clear(); // 로컬 스토리지 초기화
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
                isLoading: loginMutation.isLoading,
                isError: loginMutation.isError,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;
