import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ScrollWizardStepDirective } from './scroll-wizard/scroll-wizard-step.directive';
import {ScrollWizardComponent} from './scroll-wizard/scroll-wizard.component';
import { WizardService } from './wizard.service';
import { MyFancyComponentComponent } from './my-fancy-component/my-fancy-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent,ScrollWizardStepDirective,  HelloComponent, ScrollWizardComponent, MyFancyComponentComponent ],
  bootstrap:    [ AppComponent ],
  exports: [ AppComponent, ScrollWizardStepDirective, HelloComponent, ScrollWizardComponent ],
})
export class AppModule { }
