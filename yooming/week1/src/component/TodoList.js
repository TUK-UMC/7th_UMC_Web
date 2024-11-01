import './TodoList.css';
import Todoitem from "./Todoitem.js";

const TodoList = ({mockTodo,DoneTodo}) => {
    return (
    <div className="TodoList">
        <div className="ListBefore">
            <h1>해야할 일</h1>
            {mockTodo.map((todo)=>(
                <Todoitem 
                    id={todo.id}
                    isDone={todo.isDone}
                    content={todo.content}
                />
            ))}
        </div>
        <div className="ListAfter">
            <h1>해낸 일</h1>
            {DoneTodo.map((todo)=>(
                <Todoitem
                    id={todo.id}
                    isDone={todo.isDone}
                    content={todo.content}
                />
            ))}
        </div>
    </div>
    );
};
 export default TodoList;