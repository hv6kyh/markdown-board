import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoadingSpinnerOverlayComponent } from './loading-spinner-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private overlayRef: OverlayRef;

  constructor(private readonly overlay: Overlay) { }

  public show(): void {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    const spinnerOverlayPortal = new ComponentPortal(LoadingSpinnerOverlayComponent);
    this.overlayRef.attach(spinnerOverlayPortal);
  }

  public hide(): void {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
