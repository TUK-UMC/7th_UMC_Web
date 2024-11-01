function enterInput(event){
    if(event.key === 'Enter'){
        const inputBox = document.getElementById('inputbox'); //인풋 입력내용
        const inputValue = inputBox.value.trim(); // 공백 제거

        if(inputValue != ''){
            const newLi = document.createElement('li'); // li 생성
            const newBtn = document.createElement('button'); // button 생성
            const newP = document.createElement('p'); // p 생성

            newLi.appendChild(newP); // li안에 p 담기
            newBtn.innerHTML = '완료';
            newLi.appendChild(newBtn); // li안에 button 담기
            newP.append(inputValue);
            console.log(newLi)

            const todoList = document.getElementById('todo_ul');
            todoList.appendChild(newLi); // ul안에 li담기

            newBtn.addEventListener('click',(event)=>{
                todoList.removeChild(event.currentTarget.parentNode)
                const doneLi = document.createElement('li') //done li 생성
                const deleteBtn = document.createElement('button'); //delete button 생성
                doneLi.appendChild(newP);
                doneLi.appendChild(deleteBtn);
                deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';

                const todoneList = document.getElementById('todone');
                todoneList.appendChild(doneLi);

                deleteBtn.addEventListener('click',(event) =>{
                    todoneList.removeChild(event.currentTarget.parentNode)
                })//삭제버튼 클릭이벤트

            })//완료버튼 클릭이벤트

            console.log(newBtn)

            inputBox.value = '';

        }
    }
}


    