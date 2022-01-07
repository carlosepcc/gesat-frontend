<template>
  <q-page padding>
    <q-table
      title="Artefactos"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :dense="$q.screen.lt.md"
    />
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
const $q = useQuasar();

function toggleTableFullscreen() {
  return (isTableFullscreen.value = !isTableFullscreen.value);
}
const isTableFullscreen = ref(false);
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: 'name',
    sortable: true,
  },
  {
    name: 'description',
    align: 'center',
    label: 'Descripción',
    field: 'description',
    sortable: true,
  },
  { name: 'fase', label: 'Fase', field: 'fase', sortable: true },
  { name: 'disciplina', label: 'Disciplina', field: 'disciplina' },
  { name: 'adjunto', label: 'Adjunto', field: 'adjunto' },
];

const rows = [
  {
    name: 'Artefacto.001',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 1,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.odp',
  },
  {
    name: 'Artefacto.002',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 1,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.odp',
  },
  {
    name: 'Artefacto.003',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 1,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.odp',
  },
];
</script>
