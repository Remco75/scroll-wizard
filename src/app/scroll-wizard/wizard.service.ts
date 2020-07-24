import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ScrollWizardStepDirective } from "./scroll-wizard-step.directive";

export interface WizardNavigationEvent {
  activeStepIndex: number;
}
@Injectable()
export class WizardService {
  constructor() {}

  private stepCount = 0;
  private activeIndex = 0;
  private steps: ScrollWizardStepDirective[];
  private navigationSubject = new Subject<WizardNavigationEvent | false>();
  public navigation$ = this.navigationSubject.asObservable();
  private removeStepsSubject = new Subject<number>();
  public removeStep$ = this.removeStepsSubject.asObservable();

  initWizard(stepCount, steps: ScrollWizardStepDirective[]) {
    this.steps = steps;
    this.steps.forEach((step, index) => step.stepIndex = index)
    this.stepCount = stepCount;
    setTimeout(() => this.navigate(this.activeIndex));
  }

  gotoNextStep() {
    this.navigate(++this.activeIndex);
  }

  gotoPreviousStep() {
    this.navigate(--this.activeIndex);
  }

 
  resetFromStep(stepIndex: number, navigateToStep = true) {
    this.removeStepsSubject.next(stepIndex);
    if(navigateToStep) {
      this.activeIndex = stepIndex;
      this.navigate(stepIndex);
    } 
  }

  private navigate(newIndex) {
    this.steps.forEach((step) => (step.active = step.stepIndex === newIndex));
    const event: WizardNavigationEvent = {
      activeStepIndex: newIndex
    };
    this.navigationSubject.next(event);
  }

  getStepCount() {
    return this.stepCount;
  }

  getActiveStep() {
    return this.steps.find(step => step.active);
  }

  isLastStepActive() {
    return this.activeIndex + 1 === this.stepCount;
  }
}
