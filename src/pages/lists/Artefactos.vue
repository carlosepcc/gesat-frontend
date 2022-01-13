<template>
  <q-page padding>
    <ArtefactoForm v-model="showForm" />
   <ListPage @open-form="showForm = true" title="Artefactos" rowKey="name" :rows="artefactos" :columns="artefactoFields" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import ArtefactoForm from 'components/ArtefactoForm';
import ListPage from 'src/components/ListPage.vue';

const showForm        = ref(false);
const artefactos      = ref([])
const artefactoFields = ref([])

artefactoFields.value =[{
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

artefactos.value = [
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
  {
    name: 'Artefacto.004',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 1,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.odp',
  },
  {
    name: 'Artefacto.005',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 1,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.odp',
  },
  {
    name: 'Registro.006',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 1,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.doc',
  },]
</script>
