import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addTask } from '../../actions/taskList'

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
	constructor () {
		super()
		this.state = {
			inputValue: ''
		}
	}

	handleChange = event => {
    this.setState({
      inputValue: event.target.value,
    });
	};
	
	onClickBtn = () => {
		this.props.addTask(this.state.inputValue)
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
					onChange={this.handleChange}
					value={this.state.inputValue}
        />
				<ButtonStyled
				variant='contained'
				onClick={this.onClickBtn}
				>Criar</ButtonStyled>
			</InputContainer>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (text) => dispatch(addTask(text))
	}
}
const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksInput);