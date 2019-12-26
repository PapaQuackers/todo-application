import { Component, OnInit, QueryList, ContentChildren, AfterContentInit, Output, EventEmitter, ViewChild, TemplateRef, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { MenuOptionComponent } from './menu-option/menu-option.component';
import { Observable, merge, Subscription, Subject } from 'rxjs';
import { OverlayRef, Overlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { takeUntil, first } from 'rxjs/operators';

@Component({
  selector: 'todo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentInit, OnDestroy {

  @ContentChildren(MenuOptionComponent) menuOptions = new QueryList<MenuOptionComponent>();
  @Output('selectedValue') selectedValue: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('root', {static: true}) content: TemplateRef<any>;

  private menuSubscription: Subscription;
  private componentDestroyed$: Subject<void> = new Subject<void>();
  private combinedObservable$: Observable<any>;

  overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay) { }

  ngAfterContentInit(){
    this.createSubscription();
    this.establishMenuSubscription();

    this.menuOptions.changes.subscribe(c => {
      this.createSubscription();
      this.menuSubscription.unsubscribe();
      this.establishMenuSubscription();
    });
  }

  createSubscription(){
    const observables = [];
    this.menuOptions.forEach(o => {
      observables.push(o.valueSeleted$);
    });
    this.combinedObservable$ = merge(...observables).pipe(takeUntil(this.componentDestroyed$));
  }

  establishMenuSubscription(){
    this.menuSubscription = this.combinedObservable$
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(v => {
      this.selectedValue.emit(v);
      this.closeMenu();
    });
  }

  showMenu(elementRef: ElementRef, viewContainerRef){
      const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(elementRef)
      .withPositions(this.getPositions())
      .withPush(false);
       this.overlayRef = this.overlay.create({
        positionStrategy,
        width: elementRef.nativeElement.offsetWidth,
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop'
      })
      const menu = new TemplatePortal(this.content, viewContainerRef);
      this.overlayRef.attach(menu);
      this.overlayRef.backdropClick()
      .pipe(
        first()
      )
      .subscribe(_ => this.closeMenu());
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

   ngOnDestroy(){
     this.componentDestroyed$.next();
   }
}
