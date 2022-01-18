<template>
  <q-page padding>
    <ListPage :title="Usuarios" :rows="users" :columns="userFields"></ListPage>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ListPage from 'components/ListPage'
import global from 'src/services/global'

const { state, addArtefacto } = global
const users = ref([])
const userFields = ref([])

userFields.value = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: 'id',
    sortable: true,
  },{
    name: 'rol',
    required: true,
    label: 'Rol',
    align: 'center',
    field: 'rol',
    sortable: true,
  },{
    name: 'email',
    required: true,
    label: 'email',
    align: 'left',
    field: 'email',
    sortable: true,
  },{
    name: 'first_name',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: 'first_name',
    sortable: true,
  },{
    name: 'last_name',
    required: true,
    label: 'Apellidos',
    align: 'left',
    field: 'last_name',
    sortable: true,
  },{
    name: 'avatar',
    required: true,
    label: 'Foto',
    align: 'left',
    field: 'avatar',
    sortable: false,
  },
]
users.value = [
{
"id": 7,
"rol":"Asesor de calidad",
"email": "michael.lawson@reqres.in",
"first_name": "Michael",
"last_name": "Lawson",
"avatar": "https://reqres.in/img/faces/7-image.jpg"
},
{
"id": 8,
"rol":"Revisor",
"email": "lindsay.ferguson@reqres.in",
"first_name": "Lindsay",
"last_name": "Ferguson",
"avatar": "https://reqres.in/img/faces/8-image.jpg"
},
{
"id": 9,
"rol":"Coordinador de calidad",
"email": "tobias.funke@reqres.in",
"first_name": "Tobias",
"last_name": "Funke",
"avatar": "https://reqres.in/img/faces/9-image.jpg"
},
{
"id": 10,
"rol":"Encargado de proyecto",
"email": "byron.fields@reqres.in",
"first_name": "Byron",
"last_name": "Fields",
"avatar": "https://reqres.in/img/faces/10-image.jpg"
},
{
"id": 11,
"rol":"Encargado de proyecto",
"email": "george.edwards@reqres.in",
"first_name": "George",
"last_name": "Edwards",
"avatar": "https://reqres.in/img/faces/11-image.jpg"
},
{
"id": 12,
"rol":"Revisor",
"email": "rachel.howell@reqres.in",
"first_name": "Rachel",
"last_name": "Howell",
"avatar": "https://reqres.in/img/faces/12-image.jpg"
}
]/* 
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
</script>
