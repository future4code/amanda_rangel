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
    "text": "Estudar"
  }
];

 describe("Planner Action-Creators", () => {
  test("Set Tasks", () => {
    const expectedResult = {
      payload: {
        tasks: mockTasks,
      }
    };
    const result = setTasks(mockTasks);
    expect(expectedResult).toMatchObject(result);
  });
});