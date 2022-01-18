<template>
  <q-page padding>
    <ListPage title="Reportes de Notificación" :rows="rnotificacion" :columns="rnotificacionFields"></ListPage>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ListPage from 'components/ListPage'
import global from 'src/services/global'

const { state, addArtefacto } = global
const rnotificacion = ref([])
const rnotificacionFields = ref([])
</script>
