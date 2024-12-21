import React, { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ onCreate }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
        onCreate({ title, content, checked: false });
        setTitle("");
        setContent("");
    }
    };

    return (
    <FormContainer onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">ToDo 생성</button>
    </FormContainer>
    );
};

export default TodoForm;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    input,
    textarea {
    margin-bottom: 10px;
    padding: 10px;
    }

    button {
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    }
`;
