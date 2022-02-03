import { api } from 'boot/axios'
import { Notify, Loading, QSpinnerGears } from 'quasar'

export default function listar(list = users, url = '/usuario') {
  Loading.show({
    message: `Accediendo al listado ${url}`,
    spinner: QSpinnerGears
  })
 
api.get(url)
 .then(function (response) {
   // handle success
   list.value = response.data
   Loading.hide()
  Notify.create('Carga exitosa')
 })
 .catch(function (error) {
   // handle error
   console.log(error);
   Loading.hide()
   Notify.create({
         color: 'negative',
         position: 'top',
         message: `Carga fallida. ${error.message}. Revise su conexión a internet`,
         icon: 'report_problem',
       })
 })
 .then(function () {
   // always executed
 });
}

export { listar }
