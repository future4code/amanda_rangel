import React from "react";
import { connect } from "react-redux";
import { Divider, Form, FormControl, FormGroup, ControlLabel, Button } from "rsuite";
import styled from "styled-components"
import {createNewTask, fetchAllTasks} from "../../actions/tasks";
import {WeekDayPicker} from "../../Components/WeekDayPicker"



const Container = styled.div`
padding-top: 30px;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  color: darkcyan;
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin:  0 20px;
  color: grey;
`;

const Tasks = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 0;
  color: darkcyan;
`;
const TaskList = styled.ul`
  list-style: square;
  padding: 20px 10px;
  color: grey;
  display: grid;
  grid-gap: 10px;
`;


class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"",
      day: "",
    }
  }
  componentDidMount() {
    this.props.fetchAllTasks();
  }

  onChangeText = text => {
   this.setState({ text })
  };

  onChangeSelect = day => {
    this.setState({ day })
  };

  clearForm = () => {
    this.setState({
      text: "",
      day: "",
    });
  };

  onClickBtn = () => {
    const {text, day} = this.state;
    this.props.createNewTask(text, day);
    this.clearForm();
  };



  render() {
    const { tasks } = this.props;

    const  mondayTasks = tasks.map(task =>
      task.day === "Segunda" ? <li>{task.text}</li> : "");
    const  tuesdayTasks = tasks.map(task =>
      task.day === "Terça" ? <li>{task.text}</li> : "");
    const  wednesdayTasks = tasks.map(task =>
      task.day === "Quarta" ? <li>{task.text}</li> : "");
    const  thursdayTasks = tasks.map(task =>
      task.day === "Quinta" ? <li>{task.text}</li> : "");
    const  fridayTasks = tasks.map(task =>
      task.day === "Sexta" ? <li>{task.text}</li> : "");
    const  saturdayTasks = tasks.map(task =>
      task.day === "Sábado" ? <li>{task.text}</li> : "");
    const  sundayTasks = tasks.map(task =>
      task.day === "Domingo" ? <li>{task.text}</li> : "");
    return (
        <Container>
            <FormStyled>
              <FormGroup>
                <ControlLabel>Nova tarefa: </ControlLabel>
                <FormControl
                  type="text"
                  name="text"
                  style={{ width: 400 }}
                  onChange={this.onChangeText}
                  value={this.state.text}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Dia: </ControlLabel>
                <WeekDayPicker
                  onChange={this.onChangeSelect}
                />
              </FormGroup>
              <Button
                onClick={this.onClickBtn}
                style={{ width: 150, height: 40 }}
                color="cyan">
                Criar
              </Button>
             </FormStyled>
          <TableWrapper>
            <Tasks>
              <p>Segunda</p>
              <TaskList>{mondayTasks}</TaskList>
            </Tasks>
            <Divider vertical />
            <Tasks>
              <p>Terça</p>
              <TaskList>{tuesdayTasks}</TaskList>
            </Tasks>
            <Divider vertical />
            <Tasks>
              <p>Quarta</p>
              <TaskList>{wednesdayTasks}</TaskList>
            </Tasks>
            <Divider vertical />
            <Tasks>
              <p>Quinta</p>
              <TaskList>{thursdayTasks}</TaskList>
            </Tasks>
            <Divider vertical />
            <Tasks>
              <p>Sexta</p>
              <TaskList>{fridayTasks}</TaskList>
            </Tasks>
            <Divider vertical />
            <Tasks>
              <p>Sábado</p>
              <TaskList>{saturdayTasks}</TaskList>
            </Tasks>
            <Divider vertical />
            <Tasks>
              <p>Domingo</p>
              <TaskList>{sundayTasks}</TaskList>
            </Tasks>
          </TableWrapper>
        </Container>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
});

const mapDispatchToProps = dispatch => ({
    fetchAllTasks: () => dispatch(fetchAllTasks()),
    createNewTask: (text, day) => dispatch(createNewTask(text, day)),
  });


export default connect(mapStateToProps, mapDispatchToProps)(Planner);
