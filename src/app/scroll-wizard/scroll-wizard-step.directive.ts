import { Directive, Input, ViewRef, TemplateRef, ViewContainerRef, OnInit, OnChanges } from "@angular/core";
import { WizardService } from "./wizard.service";

@Directive({
  selector: "[appScrollWizardStep]"
})
export class ScrollWizardStepDirective implements OnInit {
  private hasView = false;
  public active: boolean;
  public stepIndex: number;
  private stepViewRef: ViewRef;

  constructor(private wizardService: WizardService, private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef) {}

  onNavigationStreamChange(navEvent) {
    // this is the API for our steps. Methods / properties on this context can be called from the implementing template
    const context = {
      stepCtrl: {
        resetFromHere: (stepIndex = this.stepIndex) => this.wizardService.resetFromStep(stepIndex),
        goNext: () => this.wizardService.gotoNextStep()
      },
      index: this.stepIndex
    };

    if (this.active) {
        this.stepViewRef = this.viewContainer.createEmbeddedView(this.templateRef, context);
        this.hasView = true;
        this.viewContainer.insert(this.stepViewRef);
    }
  }

  onRemove(removeAboveIndex: number) {
    if (this.hasView && this.stepIndex >= removeAboveIndex) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  ngOnInit() {
    this.wizardService.navigation$.subscribe(navEvent => this.onNavigationStreamChange(navEvent));
    this.wizardService.removeStep$.subscribe(index => this.onRemove(index));
  }
}
