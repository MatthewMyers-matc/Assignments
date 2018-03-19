//array to hold tasks
var tasks = [];

//task status 'enum'
var taskStatus = {
  active: 'active',
  completed: 'completed'
}

//task constructor function
function Task (id, name, status) {
  this.id = id;
  this.name = name;
  this.status = status;
}

//creates a new task element and adds it to the DOM
function addTaskElement (task) {
  //create elements
  var listEL = document.getElementById('active-list');
  var taskEL = document.createElement('li');
  var textEl = document.createTextNode(task.name);

  //set attributes
  taskEL.setAttribute('id', task.id);

  //add text to task element
  taskEL.appendChild(textEl);

  //add text element to list
  listEL.appendChild(taskEL);
}

//click handler to add new tasks
function addTask (event) {
  //get input
  var inputEL = document.getElementById('input-task');
  if(inputEL.value !== ''){
    //create a unique id
    var id = 'task-' + tasks.length;

    //create a new task
    var task = new Task(id, inputEL.value, taskStatus.active);
    tasks.push(task);

    //add the task to the DOM
    addTaskElement(task);

    //reset input
    inputEL.value = '';
  }
}

//click handler to complete a task
function completeTask (event) {
  //get the task element
  var taskEL = event.target;
  var id = taskEL.id;

  //find corresponding task in tasks array and update status
  for (var i = 0; i < tasks.length; i++) {
   if(tasks[i].id === id) {
     tasks[i].status = taskStatus.completed;
     break;
   }
  }

  //move task element from active list to completed list
  taskEL.remove();
  document.getElementById('completed-list').appendChild(taskEL);
}

function init(){
  //wire up the add task button click handler
  document.getElementById('add-task').onclick = addTask;

  //wire up the task complete list item click handler
  document.getElementById('active-list').onclick = completeTask;
}

init()
