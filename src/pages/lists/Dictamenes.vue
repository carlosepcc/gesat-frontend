<template>
  <q-page padding>
    <ListPage title="Dictámenes técnicos" :rows="dictamenes" :columns="dictamenFields" />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ListPage from 'components/ListPage'

const dictamenes = ref([])
const dictamenFields = ref([])
</script>
