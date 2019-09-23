function createTask(){
  let inputValue = document.querySelector("#task").value;
  
  let selectedWeekDay = document.querySelector("#weekDay").value;

  let taskList = document.querySelector("#" + selectedWeekDay + " .task-items");
  
  taskList.innerHTML += "<li>" + inputValue + "</li>";

  // console.log(weekDay);

}



