import {
  Directive, ElementRef, Input, OnInit
} from '@angular/core';

@Directive({
// tslint:disable-next-line:directive-selector
selector: '[taskDone]'
})

export class TaskDoneDirective {

  @Input() TaskDone: boolean;

  constructor( private el: ElementRef) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
      if (this.TaskDone) {
        this.el.nativeElement.style.textDecoration = 'line-through';
      }
    }
  }
