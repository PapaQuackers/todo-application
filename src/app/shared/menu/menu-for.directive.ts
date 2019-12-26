import { Directive, Input, ViewContainerRef, TemplateRef, ElementRef, HostListener } from '@angular/core';
import { OverlayRef, Overlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MenuComponent } from './menu.component';

@Directive({
  selector: '[todoMenu]'
})
export class MenuForDirective {

  @Input() todoMenu: MenuComponent;

  constructor(
    private viewcontainerRef: ViewContainerRef, 
    private elementRef: ElementRef) { }

    @HostListener('focus')
    showMenu(){
      this.todoMenu.showMenu(this.elementRef, this.viewcontainerRef);    
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent){
      if(event.keyCode === 9){
        this.todoMenu.closeMenu();
      }
    }

}
