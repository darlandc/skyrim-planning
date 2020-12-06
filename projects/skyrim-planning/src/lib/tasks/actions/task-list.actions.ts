import { Task } from './../../shared/models/task.model';
import { Action } from '@ngrx/store';


export const ADD_TASK = '[Shopping List] Add TASK';
export const ADD_TASKS = '[Shopping List] Add TASKs';
export const UPDATE_TASK = '[Shopping List] Update TASK';
export const DELETE_TASK = '[Shopping List] Delete TASK';
export const START_EDIT = '[Shopping List] Start Edit';
export const STOP_EDIT = '[Shopping List] Stop Edit';

export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: Task) {}
}

export class AddTasks implements Action {
  readonly type = ADD_TASKS;

  constructor(public payload: Task[]) {}
}

export class UpdateTasks implements Action {
  readonly type = UPDATE_TASK;

  constructor(public payload: Task ) {}
}

export class DeleteTask implements Action {
  readonly type = DELETE_TASK;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type ShoppingListActions =
  | AddTask
  | AddTasks
  | UpdateTasks
  | DeleteTask
  | StartEdit
  | StopEdit;
