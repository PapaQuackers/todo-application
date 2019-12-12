import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { concat, delay, map, mergeMap, retryWhen, take } from 'rxjs/operators';
import { HttpResponse } from '../models/http-response';



@Injectable()
export class APIClient {
  private _baseUrl: string;

  constructor(private readonly _httpClient: HttpClient) {
    this._baseUrl = `https://localhost:44385/`;
  }

  delete<TResponse>(
    path: string,
    options?: RequestOptions
  ): Observable<HttpResponse<TResponse>> {
    return this.sendRequest<TResponse>('DELETE', path, options);
  }

  get<TResponse>(
    path: string,
    options?: RequestOptions
  ): Observable<HttpResponse<TResponse>> {
    return this.sendRequest<TResponse>('GET', path, undefined, options);
  }

  patch<TResponse>(
    path: string,
    data: any,
    options?: RequestOptions
  ): Observable<HttpResponse<TResponse>> {
    return this.sendRequest<TResponse>('PATCH', path, data, options);
  }

  post<TResponse>(
    path: string,
    data: any,
    options?: RequestOptions
  ): Observable<HttpResponse<TResponse>> {
    return this.sendRequest<TResponse>('POST', path, data, options);
  }

  put<TResponse>(
    path: string,
    data: any,
    options?: RequestOptions
  ): Observable<HttpResponse<TResponse>> {
    return this.sendRequest<TResponse>('PUT', path, data, options);
  }

  protected sendRequest<TResponse>(
    method: HttpMethod,
    path: string,
    data?: any,
    options?: RequestOptions
  ): Observable<HttpResponse<TResponse>> {
    options = options || { skipAuth: false };
    options.headers = options.headers || new HttpHeaders();
    const url = this.getRequestUrl(path);

    const httpOptions = {
      params: options.params,
      headers: options.headers
    };

    let ob: Observable<Envelope<TResponse>>;
    switch (method) {
      case 'DELETE':
        ob = this._httpClient.delete<Envelope<TResponse>>(url, httpOptions);
        break;
      case 'GET':
        ob = this._httpClient.get<Envelope<TResponse>>(url, httpOptions).pipe(
          retryWhen(error =>
            error.pipe(
              mergeMap((error: HttpErrorResponse) => {
                if (error.status === 408 || error.error instanceof ErrorEvent) {
                  // a timeout or a client-side or network error occurred. retry
                  return of(error.status).pipe(delay(500));
                }
                return throwError(error);
              }),
              take(3),
              concat(throwError(error))
            )

          )
        );

        break;
      case 'PATCH':
        ob = this._httpClient.patch<Envelope<TResponse>>(url, data, httpOptions);
        break;
      case 'POST':
        ob = this._httpClient.post<Envelope<TResponse>>(url, data, httpOptions);
        break;
      case 'PUT':
        ob = this._httpClient.put<Envelope<TResponse>>(url, data, httpOptions);
        break;
      default:
        throw new Error(`${method} is not a supported method.`);
    }

    return ob.pipe(map((responseData) => {
        const r = new HttpResponse<TResponse>(responseData.responseData);
        r.status = responseData.status;
        r.message = responseData.message;
        return r;
    }));
  }

  private getRequestUrl(path: string) {
    return this._baseUrl + path;
  }
}

export type HttpMethod = 'DELETE' | 'GET' | 'PUT' | 'POST' | 'PATCH';

export interface RequestOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  skipAuth?: boolean;
}

interface Envelope<T> {
  responseData?: T;
  status: boolean;
  message: string;
}
