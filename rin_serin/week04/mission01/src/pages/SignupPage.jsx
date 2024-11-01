import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
    /* cursor: ${({ isValid }) => (isValid ? "pointer" : "not-allowed")};
    pointer-events: ${({ isValid }) => (isValid ? "auto" : "none")}; */
`;

const SignupPage = (props) => {

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
        mode: "onChange" 
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출', data);
    };

    return (
        <All>
            <h2>회원가입</h2>
            <Forms onSubmit={handleSubmit(onSubmit)}>
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
