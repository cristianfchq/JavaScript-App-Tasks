document.getElementById('formTask').addEventListener('submit',saveTask)

function saveTask(e){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    //console.log(title,description);

    //nuestro objeto de la tarea con el titulo de la tarea y su descripcion
    const task = {
        title: title,
        description: description
    };

    let tasks = [];

    // tasks.push(task);
    // tasks.push(task);
    // tasks.push(task);

    // console.log(tasks);

    //localStorage.setItem('tasks', JSON.stringify(task));
    //JSON.parse(localStorage.getItem('tasks'));
    //!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!
    //! para almacenar u obtener los datos del localStorage
    //preguntamos si existe la tarea
    //todo esto pasa si no tenemos una tarea almacenada
    if(localStorage.getItem('tasks') === null){
        //declaramos un array de tareas vacia
        let tasks = [];
        //con el metodo push agregamos la tarea en la variable tasks
        tasks.push(task);
        //colocamos la tarea en el localStorage convirtiendo a string
        localStorage.setItem('tasks',JSON.stringify(tasks));
    //si ya existen tarea guardadas
    }else{
        //obtenemos las tareas del localStorage, luego lo convertimos a JSON y lo guardamos en la variable tasks
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        //console.log(tasks);
        //con el metodo push agregamos la nueva tarea en la variable tasks
        tasks.push(task);
        //colocamos la tarea en el localStorage convirtiendo a string
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    //!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!/!

    getTasks();

    document.getElementById('formTask').reset();
    e.preventDefault();
}

function getTasks(){

    // let title = document.getElementById('title').value;
    // let description = document.getElementById('description').value;

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    let tasksView = document.getElementById('tasks');//este tasks es el id dentro del div en HTML

    // var element = document.createElement('div');

    tasksView.innerHTML = '';

    for(let i = 0; i < tasks.length; i++) {
        // console.log(tasks[i]);
        let title = tasks[i].title;
        let description = tasks[i].description;
        tasksView.innerHTML += `
        <div class="card mb-3">
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">
                    Delete
                </a>
            </div>
        </div>
        `;
    }
}

function deleteTask(title){
    // console.log(title);
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].title == title){
            tasks.splice(i,1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}

getTasks(); 