import { Component, OnInit, QueryList, ContentChildren, AfterContentInit, Output, EventEmitter, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { MenuOptionComponent } from './menu-option/menu-option.component';
import { Observable, merge } from 'rxjs';
import { OverlayRef, Overlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'todo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentInit {

  @ContentChildren(MenuOptionComponent) menuOptions = new QueryList<MenuOptionComponent>();
  @Output('selectedValue') selectedValue: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('root', {static: true}) content: TemplateRef<any>;
  private combinedObservable: Observable<any>;

  overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay) { }

  ngAfterContentInit(){
    this.createSubscription();
    this.combinedObservable.subscribe(v => {
      this.selectedValue.emit(v);
      this.closeMenu();
    });
  }

  createSubscription(){
    const observables = [];
    this.menuOptions.forEach(o => {
      observables.push(o.valueSeleted$);
    });

    this.combinedObservable = merge(...observables);
  }

  showMenu(elementRef: ElementRef, viewContainerRef){
    const positionStrategy = this.overlay.position()
    .flexibleConnectedTo(elementRef)
    .withPositions(this.getPositions())
    .withPush(false);
     this.overlayRef = this.overlay.create({
      positionStrategy,
      width: elementRef.nativeElement.offsetWidth
    })
    const menu = new TemplatePortal(this.content, viewContainerRef);
    this.overlayRef.attach(menu);
  }
  
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
