<template>
  <q-page padding class="q-pt-xs">
    <div>
      <q-btn-toggle
      v-model="isTableGrid"
      size="sm"
      glossy
      dense
      push
      toggle-color="primary"
      :options="[
        { value: false, slot: 'tableview' },
        { value: true, slot: 'gridview' },
      ]"
    >
      <template v-slot:tableview>
        <q-icon name="r_table_chart" />
      </template>

      <template v-slot:gridview>
        <q-icon name="r_grid_view" />
      </template>
    </q-btn-toggle>

    <q-btn-toggle
      v-model="isTableDense"
      size="sm"
      glossy
      dense
      push
      class="q-mx-sm"
      toggle-color="primary"
      :options="[
        { value: false, slot: 'normal' },
        { value: true, slot: 'dense' },
      ]"
    >
      <template v-slot:normal>
        <q-icon name=r_table_rows  />
      </template>

      <template v-slot:dense>
        <q-icon name=view_headline />
      </template>
    </q-btn-toggle>

    <q-toggle
    size="lg"
      icon="r_fullscreen"
      v-model="isTableFullscreen"
    />
    <q-input
    borderless
      bottom-slots
      v-model="filter"
      label="Filtrar"
      counter
      :dense="isTableDense"
    >
      <template v-slot:prepend>
        <q-icon name="r_search" />
      </template>
      <template v-slot:append>
        <q-icon name="r_close" @click="filter = ''" class="cursor-pointer" />
      </template>
    </q-input>
</div>
    <q-table
      title="Artefactos"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :dense="isTableDense"
      :grid="isTableGrid"
      :fullscreen="isTableFullscreen"
      rows-per-page-label="Filas por página"
      icon-next-page="help"
      :filter="filter"
      flat
      bordered
    />

    </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
const $q = useQuasar();

const filter = ref('');

const isTableGrid = ref(false);
function toggleTableGrid() {
  return (isTableGrid.value = !isTableGrid.value);
}
const isTableFullscreen = ref(false);
function toggleTableFullscreen() {
  return (isTableFullscreen.value = !isTableFullscreen.value);
}
const isTableDense = ref($q.screen.lt.sm);
function toggleTableDense() {
  return (isTableDense.value = !isTableDense.value);
}
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
    align: 'left',
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
  },{
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
