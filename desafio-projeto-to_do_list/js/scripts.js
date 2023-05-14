// Seleção do elementos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');
let oldInputValue;

// Funções
const criarElemento = (text) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('remove-todo');
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)
    
    todoInput.value = "";
    todoInput.focus();
}

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (textoModificado) => {
    const todos = document.querySelectorAll(".todo")
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");
        // Confirmar que está alterando o certo
        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = textoModificado
        }
    })
}

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    if(inputValue) {
        criarElemento(inputValue)
    };
});

document.addEventListener('click', (e) => {
    const targetElement = e.target;
    const elementoPaiMaisProximo = targetElement.closest('div');
    let todoTitle;

    if(elementoPaiMaisProximo && elementoPaiMaisProximo.querySelector('h3')) {
        todoTitle = elementoPaiMaisProximo.querySelector('h3').innerText;
    }

    if(targetElement.classList.contains("finish-todo")) {
        elementoPaiMaisProximo.classList.toggle('done')
    }

    if(targetElement.classList.contains("edit-todo")) {
        toggleForms();
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }

    if(targetElement.classList.contains("remove-todo")) {
        elementoPaiMaisProximo.remove();
    }

});

cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForms();
})

editForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const textoModificado = editInput.value;
    if(textoModificado) {
        // atualizar
        updateTodo(textoModificado)
    }
    toggleForms();
})