import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { updateTaskText, addTask } from '../../actions/taskList'

const TextFieldStyled = styled(TextField)`
	margin: 10px;
	width: 70vw;
`
const InputContainer = styled.div`
display: flex;
align-items: center;
`

const ButtonStyled = styled(Button)`
	height: 8vh;
	background-color: #c96026;
	opacity: 0.8;
	color: white;
	&:hover {
		background-color: #333;
	}
`

class TasksInput extends React.Component {
	constructor (props) {
		super(props)
	}

	onUpdateTaskText = (event) => {
		this.props.updateTaskText(event.target.value)
	}
	
	onClickBtn = () => {
		const newId = Date.now();
		this.props.addNewTask(newId)
	}

	onEnterPress = (event) => {
		if(event.key === 'Enter') {
			const newId = Date.now();
			this.props.addNewTask(newId)
		}
	}

	render() {
		return (
			<InputContainer>
				<TextFieldStyled
          id="outlined-full-width"
          label="Insira uma nova tarefa"
          placeholder="Nova Tarefa"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
					}}
					onChange={this.onUpdateTaskText}
					value={this.props.currentTaskText}
					onKeyPress={this.onEnterPress}
        />
				<ButtonStyled
				variant='contained'
				onClick={this.onClickBtn}
				>Criar</ButtonStyled>
			</InputContainer>
		)
	};
};

const mapStateToProps = (state) => ({
	currentTaskText: state.tasks.currentTaskText
})

const mapDispatchToProps = (dispatch) => ({
	updateTaskText: (newText) => dispatch(updateTaskText(newText)),
	addNewTask: (id) => dispatch(addTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksInput);