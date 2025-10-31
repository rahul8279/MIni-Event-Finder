class ApiResponse<T> {
  public message: string;
  public success: boolean;
  public statusCode: number;
  public data?: T;

  constructor(statusCode: number, message: string, data?: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data!;
    this.success = statusCode < 400;
  }
}
export default ApiResponse;
