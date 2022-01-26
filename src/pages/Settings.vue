<template>
  <q-page padding class="q-gutter-sm">
    
    <!-- TABLE / GRID -->
    <q-btn-toggle
              title="Modo de presentación (Tabla o Rejilla)"
              v-model="s.grid"
              push
              toggle-color="primary"
              :options="[
                {label:'Vista en Tabla', noCaps:true,value: false, slot: 'tableview' },
                {label:'Vista por Tarjetas', noCaps:true,  value: true, slot: 'gridview' },
              ]"
            >
              <template v-slot:tableview>
                <q-icon name="r_table_chart" class="on-right" />
              </template>

              <template v-slot:gridview>
                <q-icon name="r_grid_view" class="on-right"/>
              </template>
            </q-btn-toggle>
<br>
            <!-- DENSE / NORMAL -->
            <q-btn-toggle
              title="Densidad las filas en vista de tabla (Normal o Denso)"
              v-model="s.dense"
              push
              class="q-mx-sm"
              toggle-color="primary"
              :options="[
                {label:'Interfaz normal', noCaps:true, value: false, slot: 'normal' },
                {label:'Interfaz densa', noCaps:true, value: true, slot: 'dense' },
              ]"
            >
              <template v-slot:normal>
                <q-icon name="r_table_rows" class="on-right" />
              </template>

              <template v-slot:dense>
                <q-icon name="view_headline" class="on-right" />
              </template>
            </q-btn-toggle>
  </q-page>
</template>

<script setup>
import global from 'src/services/global'

const { state } = global
const s = state.value
</script>
