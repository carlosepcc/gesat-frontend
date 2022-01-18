<template>
  <q-page padding>
    <ListPage title="Minutas de reunión" :rows="minutas" :columns="minutaFields"></ListPage>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ListPage from 'components/ListPage'
import global from 'src/services/global'

const { state, addArtefacto } = global
const minutas = ref([])
const minutaFields = ref([])
</script>
