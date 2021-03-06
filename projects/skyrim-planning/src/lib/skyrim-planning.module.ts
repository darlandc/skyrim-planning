import { LibRoutingModule } from './lib-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { SkyrimPlanningComponent } from './skyrim-planning.component';

@NgModule({
  declarations: [SkyrimPlanningComponent],
  imports: [ComponentsModule, RouterModule, LibRoutingModule],
  exports: [SkyrimPlanningComponent],
})
export class SkyrimPlanningModule {}

// board
// step-by-step
// teams
// sprints
// stories
// tasks
// bugfixes
// planning poker
