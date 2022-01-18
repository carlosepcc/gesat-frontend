<template>
  <q-page padding>
    <ListPage title="Dictámenes técnicos" :rows="dictamenes" :columns="dictamenFields" />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ListPage from 'components/ListPage'
import global from 'src/services/global'

const { state, addArtefacto } = global
const dictamenes = ref([])
const dictamenFields = ref([])
</script>
