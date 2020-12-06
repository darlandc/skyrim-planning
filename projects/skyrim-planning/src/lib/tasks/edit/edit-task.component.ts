import { Task } from '../task.model';
// import { TarefaService } from './../tarefa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html'
})
export class EditTaskComponent implements OnInit {

  @ViewChild('formTask') formTask: NgForm;
  task: Task;

  constructor(
    // private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // this.tarefa = this.tarefaService.buscarPorId(id);
  }

  update(): void {
  if (this.formTask.form.valid) {
    // this.tarefaService.atualizar(this.task);
    this.router.navigate(['/tasks']);
    }
  }


}
