export interface LoginDataType {
  email: string;
  password: string;
}

export interface RegisterDataType extends LoginDataType {
  passwordCheck: string;
}
