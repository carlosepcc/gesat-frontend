<template>
  <q-page class="row items-center justify-evenly">
    <div class="text-grey column items-center">
      <q-icon :name="Math.random() > 0.5 ? 'notifications_none' : Math.random() > 0.5 ? 'sentiment_dissatisfied' : 'sentiment_very_dissatisfied'" size=xl></q-icon>
    <p>No hay nuevas notificaciones</p>
    </div>
  </q-page>
</template>

<script setup>


</script>
