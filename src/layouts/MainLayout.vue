<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar class="brand-bar">
        <div id="brand-frame" class="text-primary">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
            <!-- <q-avatar>
              <img src="~assets/logo.svg" />
            </q-avatar> -->
            <!-- <span class="column">
              <span class="brand text-primary">XEDRO</span>
              <span class="row inline items-center">
                <span class="siglas text-indigo-10">GESAT</span>
                <span class="stands text-indigo-4 q-pl-sm q-pr-xl">
                  Gestión de Actividades<br />
                  Técnicas
                </span>
              </span>
            </span> -->

              <div class="row">
<span class="brandi i-xedro on-left gt-xs"></span>
            <div class="column">
              <div class="brand text-info">XEDRO</div>
              <div class="row-inline items-center">
                <span class="text-indigo-10 text-bold siglas">GESAT</span>
                <span class="stands gt-xs" styl="color:#726584">
                  Gestión de Actividades<br />
                  Técnicas
                </span>
              </div>
            </div>

              </div>
          </q-toolbar-title>
        </div>
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
    icon: 'D',
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
<style scoped>
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
  font-weight: 1000;
  font-size: 20pt;
  color: var(--downcolor);
  background: linear-gradient(#323a8b 50%, #11134b 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.stands {
  display: inline-block;
  max-width: 200px;
  height: 100%;
  color: #726584;
  margin-left: 3px;
  font-size: 8pt;
  line-height: 8pt;
}
.brand {
  /* color: var(--xedro); only if needed outside quasar */
  text-transform: uppercase;
  display: block;
  margin-bottom: -12px;
  margin-left: 4px;
  font-size: 8pt;
  font-weight: 700;
  letter-spacing: 0;
}
</style>
