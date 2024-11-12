import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./SignupForm.css";

const schema = yup.object().shape({
  email: yup.string().email("유효한 이메일을 입력하세요").required("이메일은 필수입니다"),
  password: yup
    .string()
    .min(8, "비밀번호는 최소 8자리여야 합니다")
    .max(16, "비밀번호는 최대 16자리여야 합니다")
    .required("비밀번호는 필수입니다"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
    .required("비밀번호 확인은 필수입니다"),
});

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("회원가입이 성공적으로 완료되었습니다!");
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
        />
        <p className="error-message">{errors.email?.message}</p>

        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password")}
        />
        <p className="error-message">{errors.password?.message}</p>

        <input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          {...register("confirmPassword")}
        />
        <p className="error-message">{errors.confirmPassword?.message}</p>

        <button type="submit" className="submit-button">
          제출
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
