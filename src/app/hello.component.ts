import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styleUrls: ['./hello.css']
})
export class HelloComponent  {
  @Input() name: string;
}
