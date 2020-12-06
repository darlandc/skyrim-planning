// import { Tarefa } from './../shared/tarefas.model';
// import { TarefaService } from './../tarefa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent implements OnInit {

  @ViewChild('formTask') formTask: NgForm;
  tarefa: Task;

  constructor(
    // private tarefaService: TarefaService,
    private router: Router) { }

  ngOnInit() {
    this.tarefa = new Task();
  }

  addTask(): void {
  if (this.formTask.form.valid) {
    // this.tarefaService.cadastrar(this.tarefa);
    this.router.navigate(['/tasks']);
    }
  }

}
