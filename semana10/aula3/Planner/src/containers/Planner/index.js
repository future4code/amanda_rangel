import React from "react";
import { connect } from "react-redux";
import { Table, InputPicker, Input, Button } from "rsuite";
import styled from "styled-components"
import {createNewTask, fetchAllTasks} from "../../actions/tasks";
const { Column, HeaderCell, Cell } = Table;


const Container = styled.div`
padding-top: 30px;
`;

const InputWrapper = styled.form`
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

  handleSubmit = () => {
    this.props.createNewTask()
};

  render() {
     return (
        <Container>
          <InputWrapper onSubmit={this.handleSubmit}>
            <Input style={{ width: 400 }} placeholder="Default Input" />
            <InputPicker data="" style={{ width: 224 }} />
            <Button style={{ width: 100 }} color="cyan">Criar</Button>

          </InputWrapper>
          <Table
            height={400}
            data=""
          >
            <Column width={180} align="center" resizable>
              <HeaderCell>Segunda</HeaderCell>
              <Cell dataKey="Segunda" />
            </Column>
            <Column width={180} align="center" resizable>
              <HeaderCell>Terça</HeaderCell>
              <Cell dataKey="Terça" />
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
