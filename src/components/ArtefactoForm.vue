<template>
  <div
    class="q-pa-md shadow-2 rounded-borders q-my-md q-mx-auto"
    style="max-width: 400px"
  >
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div v-for="field in fields" v-bind:key="field.name">
        <q-input
          filled
          v-model="artefactoName"
          label="Nombre del artefacto*"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <q-input
        filled
        v-model="artefactoName"
        label="Nombre del artefacto"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor, escriba algo']"
      />

      <q-input
        label="Descripción"
        v-model="description"
        filled
        autogrow
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Por favor, escriba algo']"
      />

      <q-select

        v-model="fase"
        default
        :options="[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '2', value: 3 },
        ]"
        label="Fase"
        filled
        lazy-rules
        :rules="[val || 'Por favor, seleccione algo']"
      />

      <q-select
        v-model="disciplina"
        :options="[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '2', value: 3 },
        ]"
        label="Disciplina"
        filled
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
        accept=".doc,.docx,.odt,.xml,.pdf,.xsl,.xslx,ppt,.pptx,.odp,.ods,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>

      <div>
        <q-btn
          label="Limpiar campos"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
        <q-btn icon="r_add" label="Crear" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>
<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
const $q = useQuasar();

const props = defineProps({
  title: {
    type: String,
  },
  url: {
    type: String,
    default: '',
  },
  fields: {
    artefactoName: {
      name: 'artefactoname',
      fieldtype: 'input',
      type: 'text',
      label: 'Nombre del artefacto',
    },
  },
});

const nuevoArtefacto = ref(null);

const artefactoName = ref(null);
const description = ref(null);
const fase = ref(1);
const disciplina = ref(1);
const attachments = ref(null);

function onSubmit() {
  return true;
}

function onReset() {
  artefactoName = ref(null);
  description = ref(null);
  fase = ref(null);
  adjuntos = ref(['']);
}
</script>
