<template>
  <q-page padding>
    <q-btn @click="listarUsuarios" label="Refrescar lista" flat size="sm" no-caps/>
    <ListPage title="Usuarios" :rows="usersArr" :columns="userFields"></ListPage>
  
  </q-page>
</template>

<script setup>
import ListPage from 'components/ListPage'
import { ref,provide } from "vue";
import { listar } from 'src/services/api'

const url = '/usuario'

const usersArr = ref([])
const userFields = ref([])

userFields.value = [
  { name: 'username',    required: true,    label: 'Nombre de usuario',    align: 'left',    field: 'username',    sortable: true,},
  { name: 'roles',    required: true,    label: 'Roles',    align: 'center',    field: 'roles',    sortable: true,}
]
/* 
function removeRow(id = 1, rows) {
console.log('function remove triggered')
  var index = rows.findIndex(function(currentValue){
     return currentValue.id === id;
})
if (index != -1){
  rows.splice(index,1)
  console.log('spliced')
}else{

  console.log('index not found')
}
    
}*/

const listarUsuarios = () => listar(usersArr,url)
provide('listarUsuarios',listarUsuarios)
// execute on component load
listarUsuarios()
</script>
