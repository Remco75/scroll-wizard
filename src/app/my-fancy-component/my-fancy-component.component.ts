import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-fancy-component',
  templateUrl: './my-fancy-component.component.html',
  styleUrls: ['./my-fancy-component.component.css']
})
export class MyFancyComponentComponent {

  constructor() { }
  @Input() name: string;
  @Output() done: EventEmitter<any> = new EventEmitter(); 
  @Output() startOver: EventEmitter<any> = new EventEmitter(); 
  
  onDone() {
    this.done.emit(true);
  }

  reset() {
    this.startOver.emit()
  }
}