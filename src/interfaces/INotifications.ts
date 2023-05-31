export enum NotificationType {
  SUCCESS,
  FAILURE,
  WARNING
}

export interface INotification {
  title: string;
  text: string;
  type: NotificationType;
  id: number;
}
