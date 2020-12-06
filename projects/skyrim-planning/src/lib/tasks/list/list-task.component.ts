import { Task } from './../../shared/models/task.model';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'listar',
  templateUrl: './list-task.component.html',
})
export class ListTaskComponent implements OnInit {
  tarefas: Task[];

  @Input() TarefaConcluidaDirective: boolean;

  constructor(
    //private tarefaService: TarefaService
    ) {}

  ngOnInit() {
    // this.taskList = this.listAll();
  }
/*
  listAll(): Task[] {
    //return this.tarefaService.listarTodos();
  } */

  remove($event: any, task: Task): void {
    $event.preventDefault();
    // if (confirm('Do you want remove of "' + task.name + '"?')) {
      // this.tarefaService.remover(task.id);
      // this.tarefas = this.tarefaService.listAll();
    // }
  }

  alterarStatus(task: Task): void {
    // if (confirm('Do you want change the status of "' + task.name + '"?')) {
      //this.tarefaService.alterarStatus(tarefa.id);
      //this.tarefas = this.tarefaService.listarTodos();
    // }
  }
}
