import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputBox from "../components/Input";

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
    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 올바르게 입력해주세요'),
        password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 입력해주세요')
    });

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"  // 입력할 때마다 검증 상태 업데이트
    });

    const onSubmit = (data) => {
        // console.log('폼 데이터 제출', data);
    };

    console.log(register("email"));

    return (
        <All>
            <h2>로그인</h2>
            <Forms onSubmit={handleSubmit(onSubmit)}>
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