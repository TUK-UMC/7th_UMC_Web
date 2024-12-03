import React from "react";
import styled from "styled-components";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
    return (
    <ItemContainer>
        <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => onUpdate(todo.id, { checked: !todo.checked })}
        />
        <Content>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
        </Content>
        <Button onClick={() => onDelete(todo.id)}>삭제</Button>
    </ItemContainer>
    );
};

export default TodoItem;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Content = styled.div`
    flex-grow: 1;
    margin-left: 10px;
`;

const Button = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
`;
