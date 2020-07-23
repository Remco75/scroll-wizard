import { Component, OnInit, AfterViewInit, Input, Output, ContentChildren, QueryList, EventEmitter, ElementRef } from '@angular/core';
import { WizardService } from '../wizard.service';
import {ScrollWizardStepDirective} from './scroll-wizard-step.directive';
@Component({
  selector: 'app-scroll-wizard',
  templateUrl: './scroll-wizard.component.html',
  styleUrls: ['./scroll-wizard.component.css'],
  providers:[WizardService]
})
export class ScrollWizardComponent implements AfterViewInit {
	public stepArray: ScrollWizardStepDirective[];
	@Input() defaultStepValidity = true;

	@ContentChildren(ScrollWizardStepDirective) private steps: QueryList<ScrollWizardStepDirective>;
	constructor(private wizardService: WizardService, private elRef: ElementRef) {
		this.wizardService.navigation$.subscribe((event) => {
      setTimeout(() => this.elRef.nativeElement.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}))
    });
	}

	ngAfterViewInit() {
		this.stepArray = this.steps.map((step) => step);
		this.wizardService.initWizard(this.stepArray.length, this.stepArray);
	}
}
