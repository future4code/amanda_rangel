function createTask(){
  let inputValue = document.querySelector("#task").value;
  
  let weekDay = document.querySelector("#weekDay").value;

  let taskList = document.querySelector("#" + weekDay + " .task-items");
  
  taskList.innerHTML += "<li>" + inputValue + "</li>";

}



