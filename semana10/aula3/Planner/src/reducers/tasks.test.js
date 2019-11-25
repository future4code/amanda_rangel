import {tasks} from "./tasks";


const mockTask = {
  id: "abc",
  text: "Escrever email para o Astrodev",
  day: "Sexta"
};

describe("Tasks Reducer", () => {
  test("Set Task", () => {
    const testAction = {
      type: "SET_TASKS",
      payload: {
        tasks: [mockTask]
      }
    };
    const newState = tasks(undefined, testAction);
    expect(newState.tasks).toHaveLength(1);
    expect(newState.tasks[0].day).toBe("Sexta");
  })
});