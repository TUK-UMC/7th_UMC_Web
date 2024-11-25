import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const SignupContext = createContext();

function SignupContextProvider({ children }) {
    // Yup을 이용한 유효성 검사 스키마
    const schema = yup.object().shape({
        email: yup.string().email("올바른 이메일 형식이 아닙니다.").required("이메일을 올바르게 입력해주세요"),
        password: yup
            .string()
            .min(8, "비밀번호는 8자 이상이어야 합니다.")
            .max(16, "비밀번호는 16자 이하여야 합니다.")
            .required("비밀번호를 입력해주세요"),
        passwordCheck: yup
            .string()
            .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
            .required("비밀번호 확인을 입력해주세요"),
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    // useMutation을 사용한 회원가입 처리
    const signupMutation = useMutation({
    mutationFn: async (signupData) => {
        const response = await axios.post("http://localhost:3000/auth/register", {
            email: signupData.email,
            password: signupData.password,
            passwordCheck: signupData.passwordCheck,
        });
        return response.data;
    },
    onSuccess: (data) => {
        // 성공 처리
        console.log("회원가입 성공:", data);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        alert("회원가입이 완료되었습니다.");
    },
    onError: (error) => {
        // 에러 처리
        console.error("회원가입 실패", error);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    },
});


    const onSubmit = async (data) => {
        signupMutation.mutate(data); // mutate를 통해 데이터 전송
    };

    return (
        <SignupContext.Provider
            value={{
                schema,
                register,
                handleSubmit,
                errors,
                isValid,
                onSubmit,
                isLoading: signupMutation.isLoading,
            }}
        >
            {children}
        </SignupContext.Provider>
    );
}

export default SignupContextProvider;
