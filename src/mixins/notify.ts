import { NotificationType } from '@/interfaces/INotifications';
import { NOTIFY } from '@/store/mutation-types';
import { store } from '@/store';

export const notificationMixin = {
  methods: {
    notify(type: NotificationType, title: string, text: string): void {
      store.commit(NOTIFY, {
        title,
        text,
        type
      });
    }
  }
};
