<template>
  <div class="notifications">
    <article class="message is-success">
      <div class="message-header">
        Atenção!
      </div>
      <div class="message-body">
        Aqui vai um texto de notificação bem bacana.
      </div>
    </article>
    <article class="message is-warning">
      <div class="message-header">
        Atenção!
      </div>
      <div class="message-body">
        Aqui vai um texto de notificação bem bacana.
      </div>
    </article>
    <article class="message is-danger">
      <div class="message-header">
        Atenção!
      </div>
      <div class="message-body">
        Aqui vai um texto de notificação bem bacana.
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotificationsComponent'
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
