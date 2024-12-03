import { createContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const SignupContext = createContext();

function SignupContextProvider({children}){

    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 올바르게 입력해주세요'),
        password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 입력해주세요'),
        passwordCheck: yup
        .string()
        .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
        .required('비밀번호 확인을 입력해주세요')
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange" ,
    });

    const [signupData, setSignupData] = useState(null);
    
    const  fetchUserSignup = async () => {
        const response = await axios.pos('http://localhost:3000/auth/register',{
            email: signupData.email,
            password: signupData.password,
            passwordCheck: signupData.passwordCheck
        });
        console.log(response.data)
        return response.data;
    }

    const {refetch, isLoading, isError} = useQuery({
        queryKey:["userSignup", signupData],
        queryFn: fetchUserSignup,
        enabled: false,
    })

    useEffect(()=>{
        if(signupData){
            refetch()
            .then((result)=>{
                if(result.data){
                    const data = result.data
                    localStorage.setItem("accessToken", data.accessToken);
                    localStorage.setItem("refreshToken", data.refreshToken);
                }
            })
            .catch((error)=>{
                setIsLoggedIn(false);
                console.error("회원가입 실패", error);
                alert("회원가입에 실패했습니다. 에러")
            })
        }
    }, [signupData, refetch])

    //회원가입 함수
    const onSubmit = async(data) => {
        // try {
        //     const response = await axios.post('http://localhost:3000/auth/register', {
        //         email: data.email,
        //         password: data.password,
        //         passwordCheck: data.passwordCheck,
        //     });

        //      // 가상의 AccessToken과 RefreshToken을 로컬 스토리지에 저장
        //      localStorage.setItem("accessToken", response.data.accessToken);
        //      localStorage.setItem("refreshToken", response.data.refreshToken);

             
        //     console.log('회원가입 성공');
        //     return true;
        // } catch (error) {
        //     if (error.response) {
        //         console.log('회원가입 실패 메시지:', error.response.data.message);
        //         alert("회원가입 실패: " + error.response.data.message);
        //     } else {
        //         console.log('회원가입 실패:', error.message);
        //     }
        //     alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        //     return false;
        // }
        setSignupData({
            email: data.email,
            password: data.password,
            passwordCheck: data.passwordCheck,
        });
    
        try {
            const result = await refetch();
            if (result.data) {
                console.log("회원가입 성공:", result.data);
                localStorage.setItem("accessToken", result.data.accessToken);
                localStorage.setItem("refreshToken", result.data.refreshToken);
                alert("회원가입이 완료되었습니다.");
                return true;
            } else {
                console.error("회원가입 실패", error);
                alert("회원가입에 실패했습니다.");
                return false;
            }
        } catch (error) { // catch 블록에서 error를 명시적으로 선언
            console.error("회원가입 중 오류 발생:", error);
            alert("회원가입에 실패했습니다. 다시 시도해주세요.");
            return false;
        }
    };
    
    return<SignupContext.Provider
    value={{
        schema,
        register,
        handleSubmit,
        errors,
        isValid,
        onSubmit
    }}>
        {children}
    </SignupContext.Provider>
}

export default SignupContextProvider