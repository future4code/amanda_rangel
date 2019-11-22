import React from "react";
import { connect } from "react-redux";
import { Table, SelectPicker, Form, FormControl, FormGroup, ControlLabel, Button } from "rsuite";
import styled from "styled-components"
import {createNewTask, fetchAllTasks} from "../../actions/tasks";
const { Column, HeaderCell, Cell } = Table;


const Container = styled.div`
padding-top: 30px;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-around;
  padding: 30px;
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
    const weekDays = [
      {
        label: 'Segunda',
        value: 'Segunda',
      },
      {
        label: 'Terça',
        value: 'Terça',
      },
      {
        label: 'Quarta',
        value: 'Quarta',
      },
      {
        label: 'Quinta',
        value: 'Quinta',
      },
      {
        label: 'Sexta',
        value: 'Sexta',
      },
      {
        label: 'Sábado',
        value: 'Sábado',
      },
      {
        label: 'Domingo',
        value: 'Domingo',
      },
    ];
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
                <SelectPicker
                  onChange={this.onChangeSelect}
                  placeholder="Dia da semana"
                  searchable={false}
                  data={weekDays}
                  style={{ width: 224 }}
                />
              </FormGroup>
              <Button
                onClick={this.onClickBtn}
                style={{ width: 100 }}
                color="cyan">
                Criar
              </Button>
             </FormStyled>
          <Table
            height={400}
            data={this.props.tasks}
          >
            <Column
              width={180}
              align="center"
              resizable >
              <HeaderCell>Segunda</HeaderCell>
              <Cell dataKey="text" />
            </Column>
            <Column
              width={180}
              align="center"
              resizable>
              <HeaderCell>Terça</HeaderCell>
              <Cell dataKey="text" />
            </Column>
            <Column width={180} align="center" resizable>
              <HeaderCell>Quarta</HeaderCell>
              <Cell dataKey="Quarta" />
            </Column>
            <Column width={180} align="center" resizable>
              <HeaderCell>Quinta</HeaderCell>
              <Cell dataKey="Quinta" />
            </Column>
            <Column width={180} align="center" resizable>
              <HeaderCell>Sexta</HeaderCell>
              <Cell dataKey="Sexta" />
            </Column>
            <Column width={180} align="center" resizable>
              <HeaderCell>Sábado</HeaderCell>
              <Cell dataKey="Sábado" />
            </Column>
            <Column width={180} align="center" resizable>
              <HeaderCell>Domingo</HeaderCell>
              <Cell dataKey="Domingo" />
            </Column>
          </Table>
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
