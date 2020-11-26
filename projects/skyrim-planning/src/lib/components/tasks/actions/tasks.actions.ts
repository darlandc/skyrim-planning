import { Action } from '@ngrx/store';

import { ITask } from '../../../shared/interfaces/task.interface';

export const ADD_TASK = 'ADD_INGREDIENT';

export class AddTask implements Action {
  readonly type = ADD_TASK;
  payload: ITask;
}
