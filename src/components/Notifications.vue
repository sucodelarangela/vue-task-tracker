<template>
  <div class="notifications">
    <article class="message" :class="context[notification.type]" v-for="notification in notifications"
      :key="notification.id">
      <div class="message-header">
        {{ notification.title }}
      </div>
      <div class="message-body">
        {{ notification.text }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { NotificationType } from '@/interfaces/INotifications';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'NotificationsComponent',
  data() {
    return {
      context: {
        [NotificationType.SUCCESS]: 'is-success',
        [NotificationType.FAILURE]: 'is-danger',
        [NotificationType.WARNING]: 'is-warning',
      }
    };
  },
  setup() {
    const store = useStore();
    return {
      notifications: computed(() => store.state.notifications)
    };
  }
});
</script>

<style scoped>
.notifications {
  position: absolute;
  top: 0;
  right: 0;
  width: 18.75rem;
  padding: 0.5rem;
  z-index: 1;
}
</style>
