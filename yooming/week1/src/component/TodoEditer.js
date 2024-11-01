import './TodoEditer.css';
import { useState } from 'react';

const TodoEditer = ({ mockTodo = [] }) => {
    const [todos, setTodos] = useState(mockTodo)

    const handleKeyPress = (e) =>{
        if (e.key ==="Enter") {
            const newTodo = {
                id: todos.length,
                isDone: false,
                content: e.target.value
            };

            setTodos((prevTodos) => [...prevTodos, e.target.value]);
            e.target.value = '';
        }
    }
    
    return (
    <div className="TodoEditer">
        <input className="textinput" onKeyPress={handleKeyPress} type="text" placeholder="스터디 계획을 작성해 보세요!"/>
    </div>
    );
};
 export default TodoEditer;