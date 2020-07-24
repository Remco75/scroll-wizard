import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1><br><br> You will automaticly go to the next step in 3 seconds`,
  styleUrls: ['./hello.css']
})
export class HelloComponent implements OnInit  {
  @Input() name: string;
  @Output() autoAdvance: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    setTimeout(()=> this.autoAdvance.emit(), 1000);
  }
}
