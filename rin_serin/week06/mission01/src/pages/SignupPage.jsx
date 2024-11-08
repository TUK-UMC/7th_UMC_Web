import styled from "styled-components";
import { useContext } from "react";
import { SignupContext} from "../context/SignupContext";
import { Navigate, useNavigate } from "react-router-dom";

const All = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 20px 20px;
`;
const Forms = styled.form`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const InputBox = styled.input`
    width: 100%;
    min-width: 200px;
    height: 40px;
    border-radius: 4px;
    border: none;
    box-sizing: border-box;
    padding: 0 8px;
    outline: none;
    :focus {
        outline: 2px solid red;
    }
`;
const SubmitInputBox = styled(InputBox)`
    background-color: ${({ disabled }) => (disabled ? "#757575" : "#EF0000")};
    color: #fff;
    font-weight: 700;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")}; // disabled와 연결
`;

const SignupPage = () => {

    const {
        register,
        handleSubmit,
        errors,
        isValid,
        onSubmit
    }=useContext(SignupContext)

    // 유틸리티 함수 - 로컬 스토리지에서 사용자 정보 확인
function isUserExists(email) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(user => user.email === email);
}

// 예시 사용
const email = "test@example.com";
if (isUserExists(email)) {
    console.log("이미 존재하는 이메일입니다.");
} else {
    console.log("새로운 사용자 이메일입니다.");
}

    const navigate = useNavigate();

    const handleSignup = async (data) => {
        // console.log("Handling signup:", data); // 확인
        const resultOnSubmit = await onSubmit(data);
        console.log(resultOnSubmit)
        if(resultOnSubmit===true){
            navigate('login');
        }
    };
    return (
        <All>
            <h2>회원가입</h2>
            <Forms onSubmit={handleSubmit(handleSignup)}>
                <InputBox type="email" {...register("email")} placeholder="이메일을 입력해주세요"/>
                <p style={{ color: 'red' }}>{errors.email?.message}</p>
                <InputBox type="password" {...register("password")} placeholder="비밀번호를 입력해주세요"/>
                <p style={{ color: 'red' }}>{errors.password?.message}</p>
                <InputBox type="password" {...register("passwordCheck")} placeholder="비밀번호를 한번 더 입력해주세요" />
                <p style={{ color: 'red' }}>{errors.passwordCheck?.message}</p>
                <SubmitInputBox 
                    type="submit" 
                    value="제출" 
                    disabled={!isValid}
                />
            </Forms>
        </All>
    );
};

export default SignupPage;
