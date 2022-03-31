import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { NotificationService } from "../shared/service/notification.service";
@Injectable()
export class APPErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: Error | HttpErrorResponse) {
    console.log("app error handler message :", error);
  }
}
