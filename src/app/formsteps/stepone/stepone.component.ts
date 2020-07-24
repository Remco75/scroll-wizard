import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepone',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.css']
})
export class SteponeComponent implements OnInit {
  public stepform: FormGroup;
  @Output() genderSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.stepform = new FormGroup({
      gender: new FormControl(['', Validators.required])
    });

    this.stepform.valueChanges.subscribe(() => {
      this.genderSelected.emit();
    });
  }

}