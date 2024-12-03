import { ReactComponent as ErrorIcon } from "../../assets/errorIcon.svg";
import "./Error.css";

export const Error = () => {
  return (
    <div className='error-container'>
      <ErrorIcon />
      데이터를 불러올 수 없습니다. 잠시 후 다시 시도해주세요.
    </div>
  );
};
