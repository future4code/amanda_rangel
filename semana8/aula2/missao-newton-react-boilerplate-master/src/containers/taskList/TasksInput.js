import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const TextFieldStyled = styled(TextField)`
	margin: 10px;
	width: 70vw;
`

export class TasksInput extends React.Component {
	constructor () {
		super()
	}

	handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
	};
	
	render() {
		return (
			<div>
				<TextFieldStyled
          id="outlined-full-width"
          label="Insira uma nova tarefa"
          placeholder="Nova Tarefa"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
			</div>
		)
	}
}