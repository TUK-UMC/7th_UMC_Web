import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/authApi";

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const mutation = useMutation(signup, {
    onSuccess: (data) => {
      alert("회원가입 성공!");
      console.log(data);
    },
    onError: (error) => {
      alert("회원가입 실패: " + error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
