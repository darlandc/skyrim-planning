import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-skyrim',
  templateUrl: './main.html',
  styleUrls: [ './main.scss' ]
})
export class SkyrimPlanningComponent implements OnInit {

  works = 'Skyrim Planning';

  constructor() { }

  ngOnInit(): void {
    console.log('--- skyrim planning is alive!', new Date);
  }

}
