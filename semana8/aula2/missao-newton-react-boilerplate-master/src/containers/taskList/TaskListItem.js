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
import { connect } from 'react-redux';
import { checkTask, deleteTask } from '../../actions/taskList'



const ListStyled = styled(List)`
	margin: 10px;
	width: 70vw;
	color: gray;
`

const CheckboxStyled = styled(Checkbox)`
	color: #c96026;
`

const ListItemTextStyled = styled(ListItemText)`
	color: #c96026;
  text-decoration: line-through;
`


class TaskListItem extends React.Component {
	constructor () {
		super()
	
	}

	
	 
	render() {
		
		return (
			<div>
				<ListStyled>
				<Divider />
          <ListItem>
						<CheckboxStyled onClick={this.props.checkTask}/>
							{this.props.task.done ? (
								<ListItemTextStyled>			
									{this.props.task.text}
								</ListItemTextStyled>
							) : (	
							<ListItemText>
								{this.props.task.text}
							</ListItemText>
							)}
            <ListItemSecondaryAction>
              <IconButton onClick={this.props.deleteTask} >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem> 
					<Divider />      
      	</ListStyled>
			</div>
		)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteTask: id => dispatch(deleteTask(id)),
		checkTask: id => dispatch(checkTask(id))
	};
};


export default connect(null, mapDispatchToProps)(TaskListItem);