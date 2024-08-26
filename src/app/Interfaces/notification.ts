export interface Notification {
  id: number;
  recipientUserID : number;
  message: string;
  timestamp: Date;
  readTimestamp?: Date;
}
