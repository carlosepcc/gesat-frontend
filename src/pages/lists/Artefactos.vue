<template>
  <q-page padding>
    <ArtefactoForm
      formtitle="Artefacto"
      :actions="['Guardar', 'Limpiar campos']"
      v-model="showForm"
      :data="{}"
    />
    <q-btn
      label="addArtefacto( )"
      no-caps
      @click="artefactos.push({  
      id: Math.floor(Math.random() * 10000),
      name: 'Nuevo Artefacto',
      description: 'Un artefacto muy importante',
        fase: 1,
        disciplina: 2,
        adjunto: 'documento051.docx',
      })"
      icon="add"
    />
    <ListPage
      @open-form="showForm = true"
      @delete-rows="deleteTuples"
      title="Artefactos"
      rowKey="id"
      :rows="artefactos"
      :columns="artefactoFields"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import ArtefactoForm from 'components/ArtefactoForm';
import ListPage from 'src/components/ListPage.vue';

import global from 'src/services/global'

const { state, addArtefacto } = global
const $q = useQuasar();
const showForm = ref(false);
const artefactos = ref([])
const artefactoFields = ref([])

artefactoFields.value = [{
  name: 'id',
  required: true,
  label: 'ID',
  align: 'rigth',
  field: 'id',
  sortable: true,
},{
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

artefactos.value = state.value.artefactoArr

function deleteTuples(selectedRows = []) {

  $q.dialog({
    title: 'Confirme eliminación',
    message: 'La eliminación será permanente.',
    cancel: true,
    persistent: true,
    color: 'negative',
    ok: { label: 'Eliminar', noCaps: true, flat: true },
    cancel: { color: 'primary', noCaps: true, flat: true }
  }).onOk(() => {
    console.log('>>>> OK')
    selectedRows.filter(function (item) {
      artefactos.value.splice(artefactos.value.indexOf(item), 1);
      return item;
    });
  }).onCancel(() => {
    console.log('>>>> Cancel')
    return 'Canceled by user'
  })

}
</script>
