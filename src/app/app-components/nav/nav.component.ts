import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { ApplicationService } from 'src/app/application-wide-services/application.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Overlay, ConnectionPositionPair, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'todo-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild("input", {static: true}) inputElement: ElementRef;
  @ViewChild("input", {static: true}) inputTemplate: TemplateRef<any>;
  userData$: Observable<User>;
  overlayRef: OverlayRef;
  constructor(private applicationService: ApplicationService, private overlay: Overlay) { }

  ngOnInit() {
    this.userData$ = this.applicationService.user$;
  }

  logout(){
    this.applicationService.logout();
  }

  showMenu(){
    const positionStrategy = this.overlay.position()
    .flexibleConnectedTo(this.inputElement)
    .withPositions(this.getPositions())
    .withPush(false);
     this.overlayRef = this.overlay.create({
      positionStrategy,
      width: this.inputElement.nativeElement.offsetWidth
    })
    const menu = new ComponentPortal(MenuComponent);
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
