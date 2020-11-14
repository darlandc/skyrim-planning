import { Component, OnInit } from '@angular/core';
import { Manager } from '../../services/manager';

@Component({
  selector: 'sky-sprints',
  templateUrl: './sprints.component.html'
})
export class SprintsComponent implements OnInit {

  step = 0;

  constructor(private manager: Manager) { }

  ngOnInit(): void {
    console.log(this.step);
  }

  next(): number {
    return this.step ++;
  }

  prev(): number {
    return this.step === 0 ? this.step = 0 : this.step--;
  }

}
