import styled from "styled-components";
import { LoginContext } from "../context/LoginContext";
import InputBox from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

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

const SubmitInputBox = styled(InputBox)`
    background-color: ${({ disabled }) => (disabled ? "#757575" : "#EF0000")};
    color: #fff;
    font-weight: 700;
`;

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        errors,
        isValid,
        onSubmit
    }=useContext(LoginContext)

    const navigate = useNavigate();

    const handleLogin = async (data) => {
        const resultOnSubmit = await onSubmit(data);
        
        if(resultOnSubmit===true){
            navigate('/');
        }
    };

    return (
        <All>
            <h2>로그인</h2>
            <Forms onSubmit={handleSubmit(handleLogin)}>
                <InputBox type="email" {...register("email")} placeholder="이메일을 입력해주세요" />
                <p style={{ color: 'red' }}>{errors.email?.message}</p>
                <InputBox type="password" {...register("password")} placeholder="비밀번호를 입력해주세요" />
                <p style={{ color: 'red' }}>{errors.password?.message}</p>
                <SubmitInputBox 
                    type="submit" 
                    value="제출" 
                    disabled={!isValid}
                />
            </Forms>
        </All>
    );
};

export default LoginPage;