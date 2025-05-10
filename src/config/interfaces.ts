export interface IResponse {
  data: any;
  statusCode: number;
  message: string;
}

export interface IResponseData {
  data: any;
  error: boolean;
  message: string;
  status: any;
  [Key: string]: any;
}

export interface IDropdown {
  id: number | string;
  value: string;
}
