<template>
  <q-page padding>
    <ArtefactoForm
      formtitle="Artefacto"
      :actions="['Guardar', 'Limpiar campos']"
      v-model="showForm"
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

const $q = useQuasar();
const showForm = ref(false);
const artefactos = ref([])
const artefactoFields = ref([])


artefactoFields.value = [{
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
    id: 1,
    name: 'Artefacto.001',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 1,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.odp',
  },
  {
    id: 2,
    name: 'Artefacto.002',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 1,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.odp',
  },
  {
    id: 3,
    name: 'Artefacto.003',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 2,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.odp',
  },
  {
    id: 4,
    name: 'Artefacto.004',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 3,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.odp',
  },
  {
    id: 5,
    name: 'Artefacto.005',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 1,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.odp',
  },
  {
    id: 6,
    name: 'Registro.006',
    description: 'Descripcion del artefacto lorem ipsum dolor sit amet',
    fase: 2,
    disciplina: 'disciplina1',
    adjunto: 'adjunto.doc',
  },]

function deleteTuples(selectedRows = []) {
  
  $q.dialog({
    title: 'Confirme eliminación',
    message: 'La eliminación será permanente.',
    cancel: true,
    persistent: true,
    color:'negative',
    ok:{label:'Eliminar', noCaps:true,flat:true},
    cancel:{color:'primary', noCaps:true,flat:true}
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
