<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar class="brand-bar">
        <div id="brand-frame" class="text-primary">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
            <div class="row">
              <span class="brandi i-xedro on-left gt-xs"></span>
              <div class="column">
                <div class="brand text-xedro">XEDRO</div>
                <div class="row-inline items-center">
                  <span class="text-indigo-10 text-bold siglas">GESAT</span>
                  <span class="stands gt-sm generico stands">
                    Gestión de Actividades<br />
                    Técnicas
                  </span>
                </div>
              </div>
            </div>
          </q-toolbar-title>
        </div>
        <q-item
          class="text-white q-py-none absolute-right"
          title="AlanMathinsonTuring"
        >
          <q-item-section side>
            <q-item-label class="text-white gt-xs">{{
              user.name
            }}</q-item-label>
            <q-item-label class="text-white" caption>{{
              user.rol
            }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-avatar size="48px">
              <img :src="user.img" />
            </q-avatar>
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>

    <!--MENU LATERAL (DRAWER "gaveta") -->
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
      <router-view v-slot="{ Component, route }">
<transition>
  <keep-alive>
    <component :is="Component" :key="route.name" />
  </keep-alive>
</transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import DrawerItem from 'components/DrawerItem';
// calling here; equivalent to when component is created

const user = ref({
  name: 'Alan Mathison Turing',
  rol: 'Administrador',
  img: 'https://www.ecured.cu/images/c/c6/Alan_Turing_II.jpg',
});

const leftDrawerOpen = ref(false);
const miniState = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const drawerItems = [
  {
title: "Inicio",
icon:"home",
alt:"n",
to: "/"
  },
  {
    title: 'Dictámenes Técnicos',
    icon:'D',
    to: 'dictamenes',
    separate: true
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
    title: 'Usuarios',
    icon: 'U',
    to: 'users',
  },
  {
    separate: true,
    title: 'Ajustes',
    icon: 'settings',
    to: 'settings',
  },
  {
    title: 'Ayuda',
    icon: 'help',
    to: 'help',
  },
  {
    title: 'Acerca de',
    icon: 'info',
    to: 'about',
  },
];
</script>

<style scoped>
@font-face {
  font-family: 'Electrofied';
  src: url('https://db.onlinewebfonts.com/t/f45d0d0e10eb5171b1ad9ee95d1314f9.ttf')
    format('truetype');
}
@font-face {
  font-family: 'Aller';
  src: url('https://db.onlinewebfonts.com/t/3bf7501ddcf8338bc9cdcedad10914cb.ttf')
    format('truetype');
}
.brand-bar {
  margin-bottom: 2px;
  width: 100%;
  padding-left: 0;
  padding-inline-start: 0;
}
.xedro-bar {
  /* box-shadow: 0 2px 0 0 var(--xedro); just if it's needed outside a colored bar*/
  background: linear-gradient(140deg, var(--xedro) 30%, #fff 80%);
}
.xedro-bar .brand {
  color: var(--xedro);
}

#brand-frame {
  resize: horizontal;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  height: fit-content;
  width: 35%;
  min-width: fit-content;
  max-width: 24rem;
  border-bottom-right-radius: 90px 100px;
  background: linear-gradient(#fff 50%, #dedede);
  padding: 8px;
  padding-right: 32px;
  -webkit-box-shadow: 2px 0 12px -2px #0005;
  box-shadow: 2px 0 12px -2px #0005;
}
.brandi {
  height: 51px;
  width: 51px;
  /* padding-right: 51px; */
}
.i-xedro {
  background: url(https://www.uci.cu/sites/all/themes/uci/images/sprite.png)
    no-repeat 0-1769px;
}
.siglas {
  font-family: Electrofied, sans-serif;
  font-weight: 1000;
  font-size: 20pt;
  color: var(--downcolor);
  background: rgb(
    37,
    33,
    89
  ); /*! VALORES DE COLOR TOMADOS DEL MANUAL DE NORMAS GRÁFICAS DE XEDRO. NO MODIFICAR*/
  background: linear-gradient(
    180deg,
    rgba(37, 33, 89, 1) 0%,
    rgba(51, 59, 146, 1) 50%,
    rgba(21, 13, 66, 1) 50%,
    rgba(53, 62, 115, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.stands,
.generico {
  font-family: sans-serif; /*font face Aller has an issue with the "s" lowercase character that makes it look uppercase*/
  display: inline-block;
  max-width: 200px;
  height: 100%;
  color: #726584;
  margin-left: 3.4px;
  font-size: 8pt;
  line-height: 8pt;
}
.brand {
  /* color: var(--xedro); only if needed outside quasar */
  text-transform: uppercase;
  display: block;
  margin-bottom: -12px;
  margin-left: 2px;
  font-size: 8pt;
  font-weight: 700;
  letter-spacing: 0;
}
</style>
