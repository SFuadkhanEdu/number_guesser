const inp = document.querySelector('#input');
const form = document.querySelector('form');
const ul = document.querySelector('#list');
console.log(form);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    createTask();
    addTaskToLocal(inp.value);
})
Object.keys(localStorage).forEach(key => {
    createTask(localStorage.getItem(key));
});
function createTask(input) {
    if (inp.value.trim() === '') {
        alert('Please enter a task');
        return;
    }
   let newLi = document.createElement('li');
    let taskText = document.createElement('span');
    taskText.textContent = input ?? inp.value;
    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.classList.add('delete');
    button.addEventListener('click', function() {
        removeTaskFromLocal(taskText.textContent); // Use task text only
        ul.removeChild(newLi);
    });
    newLi.appendChild(taskText);
    newLi.appendChild(button);
    ul.appendChild(newLi);
}
function addTaskToLocal(input) {
    localStorage.setItem(input,input);
    inp.value = '';
}
function removeTaskFromLocal(input) {
    localStorage.removeItem(input)
}
