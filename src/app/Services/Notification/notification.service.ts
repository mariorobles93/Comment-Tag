import { Injectable } from '@angular/core';
import {Notification} from "../../Interfaces/notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications : Notification[] = [];

  constructor() { }

  sendNotification(notification: Notification) {
    this.notifications.push(notification);
  }

  getNotifications(): Notification[]{
    //TODO: Implement HTTP call and filter by userID
    return this.notifications;
  }
}
