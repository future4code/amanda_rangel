import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AddTasksCardContainer = styled.div`
display: flex;
flex-direction: column;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const NewTaskInput = styled.input `

margin: 5px;
`

const AddTasksCardTitle = styled.h2`

`

const NewTaskLabel = styled.label`

`

const NewTaskBtn = styled.button`
width: 20vw;
height: 5vh;
margin: 5px;
`

class AddTasksCard extends React.Component {
  constructor(props){
    super(props);
  }
  
    render(){
      return (
        <AddTasksCardContainer>
          <AddTasksCardTitle>Tarefa</AddTasksCardTitle>
          <NewTaskLabel>Nova Tarefa</NewTaskLabel>
          <NewTaskInput
           type="text" 
           value={this.props.task} 
           onChange={this.props.onChangeTaskInput}
           />
          <NewTaskBtn 
          type="submit" 
          onClick={this.props.onClickAddTask}>
          Adicionar</NewTaskBtn>
        </AddTasksCardContainer>
      );
    }
}

  AddTasksCard.propTypes = {
   task: PropTypes.string.isRequired
  }
  
export default AddTasksCard;