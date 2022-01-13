<template>
  <q-page padding>
    <ListPage :title="Usuarios" :rows="users" :columns="userFields"></ListPage>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ListPage from 'components/ListPage'

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
    sortable: true,
  },
]
users.value = [
{
"id": 7,
"email": "michael.lawson@reqres.in",
"first_name": "Michael",
"last_name": "Lawson",
"avatar": "https://reqres.in/img/faces/7-image.jpg"
},
{
"id": 8,
"email": "lindsay.ferguson@reqres.in",
"first_name": "Lindsay",
"last_name": "Ferguson",
"avatar": "https://reqres.in/img/faces/8-image.jpg"
},
{
"id": 9,
"email": "tobias.funke@reqres.in",
"first_name": "Tobias",
"last_name": "Funke",
"avatar": "https://reqres.in/img/faces/9-image.jpg"
},
{
"id": 10,
"email": "byron.fields@reqres.in",
"first_name": "Byron",
"last_name": "Fields",
"avatar": "https://reqres.in/img/faces/10-image.jpg"
},
{
"id": 11,
"email": "george.edwards@reqres.in",
"first_name": "George",
"last_name": "Edwards",
"avatar": "https://reqres.in/img/faces/11-image.jpg"
},
{
"id": 12,
"email": "rachel.howell@reqres.in",
"first_name": "Rachel",
"last_name": "Howell",
"avatar": "https://reqres.in/img/faces/12-image.jpg"
}
]

</script>
