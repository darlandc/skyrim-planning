import { BoardComponent } from './board/board.component';
import { SprintsComponent } from './sprints/sprints.component';
import { MaterialModule } from './../material.module';
import { TasksComponent } from './tasks/tasks.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TasksComponent, SprintsComponent, BoardComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TasksComponent, SprintsComponent, BoardComponent]
})
export class ComponentsModule { }
