import axios from "axios";
import {setTasks, fetchAllTasks, createNewTask} from "./index";

describe("tasks actions", () => {

  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  const mockTasks = [
      {
      "day": "Segunda",
      "text": "Lavar a louça"
    },
    {
      "day": "terça",
      "text": "estudar"
    }
  ];
  const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-amanda';

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
   describe("fetchAllTasks", () => {
     test("dispatch was called with the proper action", async () => {
       axios.get = jest.fn(() => ({
         data: mockTasks
       }));
       const expectedAction = {
         type: "SET_TASKS",
         payload: {
           tasks: mockTasks
         }
       };
       await fetchAllTasks()(mockDispatch);
       expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
       expect(axios.get).toHaveBeenCalledWith(baseURL);
     });
    });
   describe("createNewTask", () => {
     test("axios correct response is being handled", async () => {
       axios.post = jest.fn(() => ({
        status: 200
       }));
       const { day, text } = mockTasks[0];
       await createNewTask(text, day)(mockDispatch);
       expect(axios.post).toHaveBeenCalledWith(baseURL, mockTasks[0]);
       expect(mockDispatch).toHaveBeenCalledTimes(1);
      });
    });
  });