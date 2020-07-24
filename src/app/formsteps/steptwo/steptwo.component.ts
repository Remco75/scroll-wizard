import { Component, OnInit, EventEmitter, Output, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-steptwo',
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.css']
})
export class SteptwoComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
 public stepform: FormGroup;
  @Output() done: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('init!')
    this.stepform = new FormGroup({
      reason: new FormControl([''])
    });
  }

  ngOnChanges() {
    console.log('change')
  }

  ngAfterViewInit() {
    console.log('viewInit')
  }
  ngOnDestroy() {
    console.log('destroy')
  }
  onReasonDone() {
    this.done.emit();
  }
}