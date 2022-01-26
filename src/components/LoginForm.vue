<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="username"
        label="usuario"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'Por favor, esrciba algo']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Contraseña"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor, escriba su contraseña'
        ]"
      />

      <!-- <q-checkbox v-model="accept" label="Recordar usuario" />
      -->
      <div>
        <q-btn label="Olvidé mi contraseña" no-caps color="primary" flat class="q-ml-sm" />

        <q-btn label="Entrar" no-caps type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup() {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset() {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>
