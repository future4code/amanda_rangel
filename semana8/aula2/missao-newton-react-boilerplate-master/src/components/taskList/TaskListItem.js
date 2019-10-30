import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';


const ListStyled = styled(List)`
	margin: 10px;
	width: 70vw;
`

export class TaskListItem extends React.Component {
	constructor () {
		super()
	}

	render() {
		return (
			<div>
				<ListStyled>
				<Divider />
          <ListItem>
            <Checkbox />
            <ListItemText />
            <ListItemSecondaryAction>
              <IconButton >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem> 
					<Divider />      
      	</ListStyled>
			</div>
		)
	}
}