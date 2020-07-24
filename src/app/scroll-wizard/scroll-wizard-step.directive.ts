import {Directive,ViewRef,TemplateRef,ViewContainerRef,OnInit} from "@angular/core";
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

  ngOnInit() {
    this.wizardService.navigation$.subscribe(navEvent =>this.onNavigationStreamChange(navEvent));
    this.wizardService.removeStep$.subscribe(index => this.onRemove(index));
  }

  onNavigationStreamChange(navEvent) {
    if (this.active) {
      // this is the API for our steps. Methods / properties on this context can be called from the implementing template
      const context = {
        stepCtrl: {
          resetFromHere: (stepIndex = this.stepIndex, navigate=true) => this.wizardService.resetFromStep(stepIndex, navigate),
          goNext: () => this.wizardService.gotoStep(this.stepIndex + 1)
        },
        index: this.stepIndex
      };
      this.stepViewRef = this.viewContainer.createEmbeddedView(this.templateRef, context);
      if (!this.hasView) {

        this.hasView = true;
        
        this.viewContainer.insert(this.stepViewRef);
      }
    }
  }

  onRemove(removeAboveIndex: number) {
    if (this.hasView && this.stepIndex >= removeAboveIndex) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }
}
