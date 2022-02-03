<template>
  <q-page class="column items-center justify-evenly">
    <div class="text-grey column items-center">
      <q-icon
        name="r_support_agent"
        size="xl"
       ></q-icon>
      <p class="text-center">Aún no tengo nueva información que mostrarle
    {{s.user.name}}.</p></div>
  </q-page>
</template>

<script setup>
import global from 'src/services/global'

const { state } = global
const s = state.value


</script>