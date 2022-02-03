<template>
  <q-dialog position="top">
    <q-card >
      <q-card-section class="text-h7 text-uppercase text-weight-light"> {{formtitle}} </q-card-section>
      <q-separator />
      <q-card-section>
        <q-form ref="formulario" @submit="onSubmit" @reset="onReset">
      
          <q-input
          autofocus
          :dense=s.dense
            filled
            v-model="s.currentMinuta.proyecto"
            label="Nombre del proyecto"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor, escriba algo',
            ]"
          />


          <q-select
          :dense=s.dense
            v-model="s.currentMinuta.revisor"
            filled
            :options="['Alan Mathinson Turing','Charles Darwin','Albert Einstein']"
            label="Revisor"
            lazy-rules
            :rules="[val || 'Por favor, seleccione algo']"
          />
          <q-select
          :dense=s.dense
            v-model="s.currentMinuta.encargado"
            filled
            :options="['Alan Mathinson Turing','Charles Robert Darwin Wedgwood','Albert Einstein']"
            label="Encargado de proyecto"
            lazy-rules
            :rules="[val || 'Por favor, seleccione algo']"
          />
          
          <q-input
          :dense=s.dense
            label="Descripción"
            v-model="s.currentMinuta.description"
            filled
            autogrow
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor, escriba algo',
            ]"
          />
           
          <q-separator class="q-mb-sm q-mt-md" />

          <div class="q-gutter-sm">
            <q-btn
            :dense=s.dense
              :label="actions[1]"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
            <q-btn push icon="r_save" :label="actions[0]" type="submit"  color="primary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { useQuasar} from 'quasar';
import { ref, defineProps, defineEmits } from 'vue';
import global from 'src/services/global'
const { state } = global
const s = state.value
const $q = useQuasar();
const props = defineProps({
  formtitle: String,
  url: String, 
  actions: Array,
});
const emits = defineEmits(['closeForm'])
const formulario = ref(null)
s.currentMinuta.name = `Minuta ${s.minutaArr.length+1}`
function onSubmit() {
  s.minutaArr.push(s.currentMinuta)
  $q.notify('Guardado con éxito')
  onReset()
  return true;
}
function onReset() {
  s.currentMinuta = {
  proyecto:`Minuta ${s.minutaArr.length+1}`,
  encargado:'Alan Mathinson Turing',
  revisor:'Albert Einstein',
  description:'',}
// eslint-disable-next-line
formulario.value.resetValidation();
return true
  /* $q.notify('Reestablecidos todos los campos'); */
}
</script>
