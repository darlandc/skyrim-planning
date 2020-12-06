import { BoardComponent } from './components/board/board.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SprintsComponent } from './components/sprints/sprints.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sprints', component: SprintsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'board', component: BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LibRoutingModule {}
