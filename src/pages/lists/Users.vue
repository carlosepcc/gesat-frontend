<template>
  <q-page padding>
    <q-btn @click="listarUsuarios" label="listarUsuarios" push/>

    <q-btn @click="listar(users,'/usuario')" label="listar" push/>
  
    <ListPage title="Usuarios" :rows="users" :columns="userFields"></ListPage>
  
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ListPage from 'components/ListPage'
import { api } from 'boot/axios'
import {useQuasar} from 'quasar'
const $q = useQuasar()

const users = ref([])
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
function listar(list = users, url = '/usuario') {
api.get(url)
  .then(function (response) {
    // handle success
    list.value = response.data
    console.log(list.value);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    $q.notify({
          color: 'negative',
          position: 'top',
          message: `Carga fallida. ${error.message}. Revise su conexión a internet`,
          icon: 'report_problem'
        })
  })
  .then(function () {
    // always executed
  });
}
//listar(users, '/usuario')

function listarUsuarios() {
api.get('/usuario')
  .then(function (response) {
    // handle success
    users.value = response.data
    console.log(users);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    $q.notify({
          color: 'negative',
          position: 'top',
          message: `Carga fallida. ${error.message}. Revise su conexión a internet`,
          icon: 'report_problem'
        })
  })
  .then(function () {
    // always executed
  });
}
</script>
