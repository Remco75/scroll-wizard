import { Component, OnInit, EventEmitter, Output, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-steptwo',
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.css']
})
export class SteptwoComponent implements OnInit {
 public stepform: FormGroup;
  @Output() done: EventEmitter<any> = new EventEmitter();
  @Output() somethingChangedSoResetLaterSteps = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.stepform = new FormGroup({
      reason: new FormControl([''])
    });
  }
  onReasonDone() {
    this.done.emit();
  }
}