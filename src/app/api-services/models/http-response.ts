import { ErrorMessage } from './error-message';

export class HttpResponse<TResponse> {
    public status: boolean;
    public message: string;
    public errorMessages?: ErrorMessage[];
    public errorStatus?: number;

    constructor(public data?: TResponse) {}

    public hasErrors(): boolean {
        return this.status === false;
    }

    public toErrorString(): string {
      if (!this.hasErrors()) {
          return '';
      }

      let m = '';
      // tslint:disable-next-line:no-non-null-assertion
      this.errorMessages!.forEach(
        e => {
          m += e.message + '\r\n';
      });
      return m;
    }
}
