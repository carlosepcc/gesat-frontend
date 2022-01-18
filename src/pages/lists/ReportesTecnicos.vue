<template>
  <q-page padding>
    <ListPage :title="Usuarios" :rows="rtecnicos" :columns="rtecnicoFields"></ListPage>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ListPage from 'components/ListPage'
import global from 'src/services/global'

const { state, addArtefacto } = global
const rtecnicos = ref([])
const rtecnicoFields = ref([])
</script>
