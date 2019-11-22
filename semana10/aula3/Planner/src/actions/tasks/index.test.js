import axios from "axios";
import { setTasks, fetchAllTasks, createTask } from "./index";

const mockTasks = [
    {
    "id": "jGH9xnVXQMeU3tZOQ2Gy",
    "day": "Segunda",
    "text": "Lavar a louça"
  },
  {
    "id": "jGH9xnVXQMeU3tZOQ2Gy",
    "day": "terça",
    "text": "estudar"
  }
];

 describe("Planner Action-Creators", () => {
  test("Set Tasks", () => {
    const expectedResult = {
      type:"SET_TASKS",
      payload: {
        tasks: mockTasks,
      }
    };
    const result = setTasks(mockTasks);
    expect(expectedResult).toMatchObject(result);
  });
});