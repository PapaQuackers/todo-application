import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './toast/toast-data';



@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule
  ],
  exports:[ToastComponent],
  entryComponents: [ToastComponent]
})
export class ToastModule { 
  public static forRoot(config = defaultToastConfig): ModuleWithProviders {
    return {
        ngModule: ToastModule,
        providers: [
            {
                provide: TOAST_CONFIG_TOKEN,
                useValue: { ...defaultToastConfig, ...config },
            },
        ],
    };
}
}
