import React, {Component} from 'react';
import TasksCard from './components/AddTasksCard/AddTasksCard';
import styled from 'styled-components'
import NewTaskRecipientCard from './components/NewTaskRecipientCard/NewTaskRecipientCard';


const TaskListElement = styled.li` 

`

const TaskListElementBtn = styled.button`

`
 

class App extends Component {
  constructor() {
    super()
    this.state = {
      taskList: [],
      newTaskValue: '',
    };
  }


  addNewTask= () => {
    
    const newTask= {
      task: this.state.newTaskValue,
    }

    const newTaskListCopy = [newTask, ...this.state.taskList]

    this.setState({
      taskList: newTaskListCopy,
      newTaskValue: '',
    })
  }

  onChangeTaskInput = event => {
    this.setState({newTaskValue: event.target.value})
  }

  onClickRemoveBtn = () => {
    const commentInput3 = this.state.showCommentInput3

    const newState3 = {
     showCommentInput3: !commentInput3
    }

    this.setState(newState3)
    
  }

  render() {
    
    const elementsOnTheList = this.state.taskList.map((item,index) => {
      return <TaskListElement 
      key={index} 
      task={item.task}
      >
      {item.task}
      <TaskListElementBtn>X</TaskListElementBtn>
      </TaskListElement>
    })

    return (
      <div>
        <TasksCard
          task={this.state.newTaskValue}
          onChangeTaskInput={this.onChangeTaskInput}
          onClickAddTask={this.addNewTask}>
        </TasksCard> 
        <NewTaskRecipientCard>
          {elementsOnTheList}
        </NewTaskRecipientCard>
       
      </div>
    );
  }
}

export default App;
