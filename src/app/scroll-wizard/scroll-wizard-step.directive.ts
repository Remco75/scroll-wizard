import { Directive, Input, ViewRef, TemplateRef, ViewContainerRef, OnInit, OnChanges } from "@angular/core";
import { WizardService } from "../wizard.service";

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
    // this is the API for our steps. Methods on this context can be called from the implementing template
    const context = {
      stepCtrl: {
        resetFromHere: () => this.wizardService.resetFromStep(this.stepIndex),
        goNext: () => this.wizardService.gotoNextStep()
      }
    };


    if (this.active) {
      if (!this.hasView) {
        this.stepViewRef = this.viewContainer.createEmbeddedView(this.templateRef, context);
        this.hasView = true;
      } else {
        this.viewContainer.insert(this.stepViewRef);
      }
    }
  }

  onRemove(removeAboveIndex: number) {
    if (this.stepIndex > removeAboveIndex) {
      this.viewContainer.detach();
    }
  }

  ngOnInit() {
    this.wizardService.navigation$.subscribe(navEvent => this.onNavigationStreamChange(navEvent));
    this.wizardService.removeStep$.subscribe(index => this.onRemove(index));
  }
}
