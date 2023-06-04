import { NotificationType } from '@/interfaces/INotifications';
import { store } from '@/store';
import { NOTIFY } from '@/store/mutation-types';

type Notificator = {
  notify: (type: NotificationType, title: string, text: string) => void;
};

// Creating a custom hook in Vue
export default (): Notificator => {
  const notify = (type: NotificationType, title: string, text: string): void => {
    store.commit(NOTIFY, {
      title,
      text,
      type
    });
  };
  // The custom hook returns the function
  return {
    notify
  };
};
