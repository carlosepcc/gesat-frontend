<template>
  <q-page class="row items-center justify-evenly">
    <div class="text-grey column items-center">
      <q-icon
        :name="
          Math.random() > 0.5
            ? 'sentiment_dissatisfied_rounded'
            : Math.random() > 0.5
            ? 'support_agent_rounded'
            : 'sentiment_very_dissatisfied_rounded'
        "
        size="xl"
      ></q-icon>
      <p>No hay nuevas notificaciones</p>
    </div>
  </q-page>
</template>

<script setup></script>
