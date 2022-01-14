<template>
  <q-page class="q-pt-md">
    <div class="q-pa-0">
      <q-table
        :title="title"
        :rows="rows"
        :columns="columns"
        :row-key="rowKey"
        :dense="isTableDense"
        :grid="isTableGrid"
        grid-header
        :hide-header="isTableGrid"
        :fullscreen="isTableFullscreen"
        rows-per-page-label="Filas por página"
        :filter="filter"
        selection="multiple"
        v-model:selected="selected"
        separator="vertical"
        :pagination="{ rowsPerPage: 0 }"
      >
        <!-- TODO :loading="loading" -->
        <template v-slot:top>
          <div class="q-gutter-sm row items-center">
            <!-- TABLE / GRID -->
            <q-btn-toggle
              title="Modo de presentación (Tabla o Rejilla)"
              v-model="isTableGrid"
              size="sm"
              push
              toggle-color="primary"
              :options="[
                { value: false, slot: 'tableview' },
                { value: true, slot: 'gridview' },
              ]"
            >
              <template v-slot:tableview>
                <q-icon name="r_table_chart" />
              </template>

              <template v-slot:gridview>
                <q-icon name="r_grid_view" />
              </template>
            </q-btn-toggle>

            <!-- DENSE / NORMAL -->
            <q-btn-toggle
              title="Densidad las filas en vista de tabla (Normal o Denso)"
              v-model="isTableDense"
              size="sm"
              push
              class="q-mx-sm"
              toggle-color="primary"
              :options="[
                { value: false, slot: 'normal' },
                { value: true, slot: 'dense' },
              ]"
            >
              <template v-slot:normal>
                <q-icon name="r_table_rows" />
              </template>

              <template v-slot:dense>
                <q-icon name="view_headline" />
              </template>
            </q-btn-toggle>
            <!-- FULLSCREEN -->
            <q-toggle
              size="lg"
              icon="r_fullscreen"
              v-model="isTableFullscreen"
              title="Pantalla completa"
            />
            
<!-- ELIMINAR -->
<q-btn icon="delete" label="Eliminar selección" no-caps text-color="negative" push @click="$emit('deleteRows',selected)" />
        
         <!-- NUEVA ENTRADA -->
            <q-btn icon="add" label="Nueva entrada" push no-caps @click="$emit('openForm')" />

            <!-- FILTER -->
            <q-input
              borderless
              bottom-slots
              v-model="filter"
              label="Filtrar"
              placeholder="Escriba para filtrar.."
              :dense="isTableDense"
            >
              <template v-slot:prepend>
                <q-icon name="r_search" />
              </template>
              <template v-slot:append>
                <q-icon v-show="filter" name="r_close" @click="filter = ''" class="cursor-pointer" />
              </template>
            </q-input>

         </div>
        </template>
    
      </q-table>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref, defineProps, defineEmits } from 'vue';
const $q = useQuasar();

const props = defineProps({
  title: String,
  rows: Array,
  columns: Array,
  rowKey: {
    type: String,
    default: 'id'
  }
})
const emit = defineEmits(['openForm','deleteRows'])

const filter = ref('');
const selected = ref([]);
const isTableGrid = ref($q.screen.lt.sm);
const isTableFullscreen = ref(false);
const isTableDense = ref($q.screen.lt.sm);

/* function deleteSelected(){
      selected.value.filter(function(item){
        rows.splice(rows.indexOf(item), 1);
        return item;
      });
      selected.value = [];
    } */

function removeRow(ids = [], rows = []) {
console.log(`function remove triggered ids:`)
  var index = rows.findIndex(function(currentValue){
     return currentValue.id === id;
})
if (index != -1){
  rows.splice(index,1)
  console.log('spliced')
}else{

  console.log('index not found')
}
   
}
</script>
