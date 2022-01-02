<template>
  <q-item clickable v-ripple>

    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      {{ title }}
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
    
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DrawerItem',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: 'circle',
    },
  },
});
</script>
