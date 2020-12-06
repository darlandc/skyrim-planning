import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskListComponent, TaskEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: TaskListComponent }]),
  ],
  // providers: [LoggingService]
})
export class TasksModule {}
