import { createContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

//유틸리티 함수 : 로컬 스토리지에 사용자 정보 저장
function saveUserToLocalStorage(email, password){
    const users = JSON.parse(localStorage.getItem("users"))||[];
    console.log(localStorage)
    //새로운 사용자 정보 추가
    users.push({email, password});

    ///업데이트된 사용자 목록을 로컬 스토리지에 저장
    localStorage.setItem("users", JSON.stringify(users));
}

// 유틸리티 함수 - 토큰 저장 여부 확인
function areTokensStored() {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return accessToken !== null && refreshToken !== null;
}


export const LoginContext = createContext();

function LoginContextProvider({children}){
    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 올바르게 입력해주세요'),
        password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 입력해주세요'),
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange" ,
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userIdIs, setUserIdIs] = useState('');

    const onSubmit = async(data) => {
        try {
            //로컬 스토리지에 사용자 데이터 저장
            saveUserToLocalStorage(data.email, data.password);

            // 가상의 AccessToken과 RefreshToken을 로컬 스토리지에 저장
            localStorage.setItem("accessToken", "mockAccessToken");
            localStorage.setItem("refreshToken", "mockRefreshToken");
            const userEmailId = data.email.split('@')[0];
            setUserIdIs(userEmailId)
            setIsLoggedIn(true);
            console.log('로그인 성공');
            return true;
        } catch (error) {
            setIsLoggedIn(false);
            console.log('로그인 실패', error);
            alert("로그인에 실패했습니다. 다시 시도해주세요.");
            return false;
        }
    };

    const logout = () => {
        setIsLoggedIn(false); // 로그아웃 시 isLoggedIn을 false로 변경
        localStorage.clear();
        console.log(localStorage)
    };

    return<LoginContext.Provider
        value={{
            register,
            handleSubmit, 
            errors,
            isValid,
            onSubmit,
            isLoggedIn,
            logout,
            userIdIs
        }}
    >
        {children}
    </LoginContext.Provider>
}

export default LoginContextProvider