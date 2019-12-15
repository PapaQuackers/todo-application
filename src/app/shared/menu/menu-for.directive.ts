import { Directive, Input, ViewContainerRef, TemplateRef, ElementRef, HostListener } from '@angular/core';
import { OverlayRef, Overlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[todoMenuFor]'
})
export class MenuForDirective {

  @Input() todoMenuFor: TemplateRef<any>;
  overlayRef: OverlayRef;

  constructor(private overlay: Overlay, private viewcontainerRef: ViewContainerRef, private elementRef: ElementRef) { }
  @HostListener('focus')
  showMenu(){
    const positionStrategy = this.overlay.position()
    .flexibleConnectedTo(this.elementRef)
    .withPositions(this.getPositions())
    .withPush(false);
     this.overlayRef = this.overlay.create({
      positionStrategy,
      width: this.elementRef.nativeElement.offsetWidth
    })
    const menu = new TemplatePortal(this.todoMenuFor, this.viewcontainerRef);
    this.overlayRef.attach(menu);
  }
  @HostListener('blur')
  closeMenu(){
    this.overlayRef.dispose();
  }

  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      },
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
      },
    ]
   }


}
