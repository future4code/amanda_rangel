function createTask(){
  let inputValue = document.querySelector("#task").value;
  
  let selectedWeekDay = document.querySelector("#weekDay").value;

  let taskList = document.querySelector("#" + selectedWeekDay + " .task-items");

  let cleanInputText= document.getElementById("task-form").reset();
  
  taskList.innerHTML += "<li>" + inputValue + "</li>";

  if(inputValue === ''){
    taskList.innerHTML = null;
    alert("Insira uma tarefa");
  }
}


  