import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { SkyrimPlanningComponent } from './skyrim-planning.component';



@NgModule({
  declarations: [SkyrimPlanningComponent],
  imports: [
    ComponentsModule
  ],
  exports: [SkyrimPlanningComponent]
})
export class SkyrimPlanningModule { }

// teams
// sprints
// stories
// tasks
// bugfixes
// planning poker
