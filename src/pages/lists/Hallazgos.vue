<template>
  <q-page padding>
    <ListPage title="Hallazgos" :rows="hallazgos" :columns="hallazgoFields"></ListPage>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ListPage from 'components/ListPage'
import global from 'src/services/global'

const { state, addArtefacto } = global
const hallazgos = ref([])
const hallazgoFields = ref([])
</script>
