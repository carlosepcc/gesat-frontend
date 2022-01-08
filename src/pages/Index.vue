<template>
  <q-page class="row items-center justify-evenly">
    <div class="text-grey column items-center">
      <q-icon
        :name="
          Math.random() > 0.5
            ? 'r_sentiment_dissatisfied'
            : Math.random() > 0.5
            ? 'r_support_agent'
            : 'r_sentiment_very_dissatisfied'
        "
        size="xl"
      ></q-icon>
      <p>No hay nuevas notificaciones</p>
    </div>
  </q-page>
</template>

<script setup></script>
