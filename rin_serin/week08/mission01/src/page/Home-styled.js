import styled from "styled-components";

const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0 0 0;
`;

const TodoForms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 12px;
  gap: 8px;
  width: 50%;
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  border: 1px solid #eee;
  cursor: pointer;

  &:checked {
    background-color: #4abdff;
    border: 1px solid #4abdff;
  }

  &:focus {
    outline: none;
  }
`;

const Todos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 16px;
width: 50%;
`;

const EachTodo = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 12px;
border: 1px solid #eee;
border-radius: 4px;
height: 74px;
box-sizing: border-box;
`;

const TodoFront = styled.div`
display: flex;
gap: 12px;
align-items: center;
margin-right: 12px;
`;

const TodoContents = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
font-size: 16px;
color: #212121;

p{
  padding: 0;
  margin: 0;
}
`;

const TodoButtons = styled.div`
display: flex;
flex-direction: row-reverse;
gap: 4px;
width: 140px;
`;

const TodoButton = styled.div`
display: flex;
flex-direction: row-reverse;
gap: 4px;
width: 68px;
`;

export{ All, TodoForms, StyledCheckbox, Todos, EachTodo, TodoFront, TodoContents , TodoButtons, TodoButton}