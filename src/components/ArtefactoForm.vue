<template>
  <q-dialog position="top">
    <q-card class="">
      <q-card-section class="text-h7 text-uppercase text-weight-light"> {{formtitle}} </q-card-section>
      <q-separator />
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset">
          <!-- <div v-for="field in fields" v-bind:key="field.name">
        <q-input
          filled
          v-model="artefactoName"
          label="Nombre del artefacto*"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div> -->
          <!-- TODO: Componente generico  -->

          <q-input
            filled
            v-model="artefactoName"
            label="Nombre del artefacto"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor, escriba algo',
            ]"
          />

          <q-input
            label="Descripción"
            v-model="description"
            filled
            autogrow
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Por favor, escriba algo',
            ]"
          />

          <q-select
            v-model="fase"
            default
            filled
            :options="[
              { label: '1', value: 1 },
              { label: '2', value: 2 },
              { label: '3', value: 3 },
            ]"
            label="Fase"
            
            lazy-rules
            :rules="[val || 'Por favor, seleccione algo']"
          />

          <q-select
            v-model="disciplina"
            filled
            :options="[
              { label: '1', value: 1 },
              { label: '2', value: 2 },
              { label: '3', value: 3 },
              { label: '4', value: 4 },
            ]"
            label="Disciplina"
            lazy-rules
            :rules="[val || 'Por favor, seleccione algo']"
          />
          <q-file
            filled
            v-model="attachments"
            label="Adjuntos"
            counter
            use-chips
            multiple
            append
            accept=".doc,.docx,.odt,.xml,.pdf,.xsl,.xslx,ppt,.pptx,.odp,.ods,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>

          <q-separator class="q-mb-sm q-mt-md" />

          <div class="q-gutter-sm">
            <q-btn
              :label="actions[1]"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
            <q-btn push icon="r_save" :label="actions[0]" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { useQuasar} from 'quasar';
import { ref, defineProps, defineEmits } from 'vue';
const $q = useQuasar();

const props = defineProps({
  formtitle: String,
  url: String, 
  actions: Array,
});
const emits = defineEmits(['closeForm'])


const nuevoArtefacto = ref(null);

const artefactoName = ref(null);
const description = ref(null);
const fase = ref(1);
const disciplina = ref(1);
const attachments = ref(null);


function onSubmit() {
  $q.notify('Creado con exito')
  onReset()
  return true;
}
function onReset() {
artefactoName.value = null;
description.value = null;
fase.value = 1;
disciplina.value = 1;
attachments.value = null;  
  $q.notify('Reestablecidos todos los campos')
}
</script>
