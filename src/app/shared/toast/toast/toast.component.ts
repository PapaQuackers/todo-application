import { Component, OnInit, Inject } from '@angular/core';
import { ToastData, TOAST_CONFIG_TOKEN, ToastConfig } from './toast-data';
import { ToastRef } from './toast-ref';

@Component({
  selector: 'todo-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(
    readonly data: ToastData, 
    readonly ref: ToastRef,
    @Inject(TOAST_CONFIG_TOKEN) private toastConfig: ToastConfig) { }

  ngOnInit() {
    setTimeout(() => {
      this.close();
    }, this.toastConfig.duration)
  }

  close() {
    this.ref.close();
  }

  get backgroundColor(){
    switch (this.data.type) {
      case 'success':
      return '#4BCA81'
      case 'warning':
      return '#ff6700'
      case 'danger':
      return '#F32013'
      default:
       return '#4BCA81'
    }
  }

}
