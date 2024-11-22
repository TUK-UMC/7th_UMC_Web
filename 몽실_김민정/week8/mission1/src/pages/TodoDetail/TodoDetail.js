import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDetailTodoInfo } from "../../apis/todoAPI";
import { Loading } from "../Loading/Loading";
import { formatDateToString } from "../../utils/formatDateToString";
import "./TodoDetail.css";

export const TodoDetail = () => {
  const { id } = useParams();
  const { data: todo, isLoading } = useQuery({
    queryKey: ["detailTodoInfo", id],
    queryFn: () => getDetailTodoInfo(id),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='todo-detail-container'>
      <h1 className='title'> ✏️ UMC TODO LIST ✏️</h1>
      <div className='todo-card-container'>
        <h2 className='todo-title'>{todo.title}</h2>
        <div className='todo-detail-content-wrapper'>{todo.content}</div>
        <span className='todo-date'>
          {formatDateToString(new Date(todo.updatedAt))}
        </span>
      </div>
    </div>
  );
};
