import { Task } from './../../../shared/models/task.model';
import { ITask } from './../../../shared/interfaces/task.interface';
import * as TasksActions from './tasks.actions';

const initialState = {
  tasks: [
    new Task(5, 'test title', 'test labels' , 10)
  ]
};

export function notificationsListReducer(
  state = initialState,
  action: TasksActions.AddTask
) {
  switch (action.type) {
    case TasksActions.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    default:
      return state;
  }
}
