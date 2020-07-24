import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ScrollWizardComponent} from './scroll-wizard/scroll-wizard.component';
import { ScrollWizardStepDirective } from './scroll-wizard/scroll-wizard-step.directive';
import { MyFancyComponentComponent } from './formsteps/my-fancy-component/my-fancy-component.component';
import { SteponeComponent } from './formsteps/stepone/stepone.component';
import { SteptwoComponent } from './formsteps/steptwo/steptwo.component';
import { HelloComponent } from './formsteps/hello/hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, ReactiveFormsModule ],
  declarations: [ AppComponent,ScrollWizardStepDirective,  HelloComponent, ScrollWizardComponent, MyFancyComponentComponent, SteponeComponent, SteptwoComponent ],
  bootstrap:    [ AppComponent ],
  exports: [ AppComponent, ScrollWizardStepDirective, HelloComponent, ScrollWizardComponent ],
})
export class AppModule { }
