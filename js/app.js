document.getElementById('formTask').addEventListener('submit',saveTask)

function saveTask(e){
    console.log(e);
    alert('hello');

    e.preventDefault();
}