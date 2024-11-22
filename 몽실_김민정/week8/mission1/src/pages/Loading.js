import { ReactComponent as LoadingSpinner } from "../assets/loadingSpinner.svg";
import "./Loading.css";

export const Loading = () => {
  return (
    <div className='loading-container'>
      <LoadingSpinner />
      게시글을 불러오는 중입니다.
    </div>
  );
};
