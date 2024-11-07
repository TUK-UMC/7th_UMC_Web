const input = document.querySelector('.input');
const todoContainer = document.querySelector('.todo'); 
const doneContainer = document.querySelector('.done'); 


const handleClickButton = (newTodo) => {
    doneContainer.appendChild(newTodo);
    const doneButton = newTodo.querySelector('button');
    doneButton.textContent = '삭제'; 
    doneButton.addEventListener('click', () => {
        newTodo.remove(); ㅇ
    });
} 

const addTodoList = (value) => {
    const newTodo = document.createElement('div');
    newTodo.classList.add('todo-item');

    const todoText = document.createElement('span');
    todoText.textContent = value;
    newTodo.appendChild(todoText);

    const doneButton = document.createElement('button');
    doneButton.textContent = '완료';
    doneButton.classList.add('done-button');
    newTodo.appendChild(doneButton)

    doneButton.addEventListener('click', () => {
        handleClickButton(newTodo);
    })
    
    todoContainer.appendChild(newTodo);
}

const enterKey = (e) => {
    if(e.key === 'Enter' && input.value.trim() !== '') {
        addTodoList(input.value);
        input.value = ''

    }
}


input.addEventListener('keypress',(e) => enterKey(e))