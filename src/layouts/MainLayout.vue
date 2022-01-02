<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
            <q-avatar>
              <img src="~assets/logo.svg" />
            </q-avatar>
            GESAT
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!--MENU LATERAL ESTILO DRAWER ("gaveta" en espanol) -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :breakpoint="500"
      bordered
      side="left"
    >
      <q-scroll-area class="fit">
        <q-list>
          <DrawerItem
            v-for="drawerItem in drawerItems"
            :key="drawerItem.title"
            v-bind="drawerItem"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- CONTENEDOR DE PAGINAS -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import DrawerItem from 'components/DrawerItem';

// calling here; equivalent to when component is created

const leftDrawerOpen = ref(false);
const miniState = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const drawerItems = [
  {
    title: 'Dictámenes Técnicos',
    icon:'D',
    to: 'dictamenes',
  },
  {
    title: 'Artefactos',
    icon: 'A',
    to: 'artefactos',
  },
  {
    title: 'Hallazgos',
    icon: 'H',
    to: 'hallazgos',
  },
  {
    title: 'Minutas de reunión',
    icon: 'M',
    to: 'minutas',
  },
  {
    title: 'Reportes de notificación',
    icon: 'N',
    to: 'rnotificacion',
  },
  {
    title: 'Reportes Técnicos',
    icon: 'T',
    to: 'rtecnicos',
  },
  {
    separate: true,
    title: 'Acerca de',
    icon: 'info',
    to: 'about',
  },
  {
    title: 'Ayuda',
    icon: 'help',
    to: 'help',
  },
];
</script>
