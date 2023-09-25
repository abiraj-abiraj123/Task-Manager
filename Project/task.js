function addtask(){
    const taskInput=document.getElementById('task');
    const taskText=taskInput.value.trim();
    if(taskText===" "){
        alert('Please enter a task.');
        return;
    }
    const taskList=document.getElementById('tasks');
    const li=document.createElement('li');
    li.innerHTML=`${taskText} <button onclick="removeTask(this)">Done</button>`;
    taskList.appendChild(li);
    taskInput.value='';
 
 }
 function removeTask(button){
 const taskList=document.getElementById('tasks');
 const listItem=button.parentNode;
 taskList.removeChild(listItem);
 }