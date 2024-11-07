import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [touched, setTouched] = useState({ email: false, password: false });

    return (
        <div>
            <label>
                이메일:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched({ ...touched, email: true })}
                />
                {emailError && touched.email && <p>{emailError}</p>}
            </label>
            <label>
                비밀번호:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => setTouched({ ...touched, password: true })}
                />
                {passwordError && touched.password && <p>{passwordError}</p>}
            </label>
        </div>
    );
}

export default LoginForm;

<button 
    disabled={!email || !password || emailError || passwordError}
    onClick={() => console.log("로그인 시도")}
>
    로그인
</button>

// 이메일 형식 검증 함수
const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) return "올바른 이메일 형식이 아닙니다.";
  return "";
};

// 이메일 input onChange 이벤트에 추가
onChange={(e) => {
  setEmail(e.target.value);
  setEmailError(validateEmail(e.target.value));
}}

// 비밀번호 길이 검증 함수
const validatePassword = (password) => {
  if (password.length < 8 || password.length > 16) 
      return "비밀번호는 8자리 이상 16자리 이하여야 합니다.";
  return "";
};

// 비밀번호 input onChange 이벤트에 추가
onChange={(e) => {
  setPassword(e.target.value);
  setPasswordError(validatePassword(e.target.value));
}}