export interface ErrorMessage {
    code?: string;
    message?: string;
    property_name?: string;
    error_type?: ErrorMessageErrorTypeEnum;
}

export enum ErrorMessageErrorTypeEnum {
  Validation = 'validation',
  Authorization = 'authorization',
  System = 'system',
  Exception = 'exception',
  NotFound = 'not_found',
}
