import { ReactComponent as LoadingSpinner } from "../assets/loadingSpinner.svg";
import "./Loading.css";

export const Loading = () => {
  return (
    <div className='loading-container'>
      <LoadingSpinner />
    </div>
  );
};
