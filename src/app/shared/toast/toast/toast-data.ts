import { InjectionToken, TemplateRef } from '@angular/core';

export class ToastData {
  type: ToastType;
  bodyText: string;
  headerText: string;
}

export type ToastType = 'warning' | 'danger' | 'success';

export interface ToastConfig {
    position?: {
        top: number;
        right: number;
    };
    duration: number;
}

export const defaultToastConfig: ToastConfig = {
    position: {
        top: 60,
        right: 40,
    },
    duration: 2000
};

export const TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');