import { createContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

// 유틸리티 함수 - 토큰 저장 여부 확인
function areTokensStored() {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return accessToken !== null && refreshToken !== null;
}


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

    //회원가입 함수
    const onSubmit = async(data) => {
        console.log('요청데이터', data)
        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                email: data.email,
                password: data.password,
                passwordCheck: data.passwordCheck,
            });

             // 가상의 AccessToken과 RefreshToken을 로컬 스토리지에 저장
             localStorage.setItem("accessToken", response.data.accessToken);
             localStorage.setItem("refreshToken", response.data.refreshToken);

             
            console.log('회원가입 성공');
            return true;
        } catch (error) {
            if (error.response) {
                console.log('회원가입 실패 메시지:', error.response.data.message);
                alert("회원가입 실패: " + error.response.data.message);
            } else {
                console.log('회원가입 실패:', error.message);
            }
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