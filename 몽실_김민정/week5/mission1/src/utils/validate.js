const emailPattern = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

export const validateUser = (values) => {
  const errors = {
    email: "",
    password: "",
  };

  if (!emailPattern.test(values.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다. 다시 확인해주세요";
  }

  if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "비밀번호는 8자 이상, 16자 이하로 입력해주세요.";
  }

  return errors;
};

export const validateLogin = (values) => {
  validateUser(values);
};
