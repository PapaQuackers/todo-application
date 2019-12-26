import { OverlayRef } from '@angular/cdk/overlay';

export class ToastRef {
  constructor(private readonly overlay: OverlayRef) { }

  close() {
    this.overlay.dispose();
  }

  isVisible() {
    return this.overlay && this.overlay.overlayElement;
  }

  getPosition() {
    console.log(this.overlay.overlayElement.getBoundingClientRect().bottom, "current bottom location");
    return this.overlay.overlayElement.getBoundingClientRect()
  }
}