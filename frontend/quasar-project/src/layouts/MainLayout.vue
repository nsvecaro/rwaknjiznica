<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Gradska Knjiznica Pula
        </q-toolbar-title>

        <div>GKC Pula</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Naslovnica',
    caption: 'Početna stranica',
    icon: 'home',
    link: '#/'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis svih knjiga',
    icon: 'book',
    link: '#/popisKnjiga'
  },
  {
    title: 'Pretraživanje',
    caption: 'Alat za pretraživanje',
    icon: 'search',
    link: '#/traziKnjigu'
  },
  {
    title: 'O nama',
    caption: 'Nešto o nama',
    icon: 'info',
    link: '#/oNama'
  },
  {
    title: 'Lokacija',
    caption: 'Lokacija Gradske Knjižnice Pula',
    icon: 'location_on',
    link: '#/lokacija'
  },
  {
    title: 'Login',
    caption: 'Ulogirajte se u svoj račun',
    icon: 'login',
    link: '#/login'
  },
  {
    title: 'Registracija',
    caption: 'Izradite svoj račun',
    icon: 'person_add',
    link: '#/registracija'
  },
  {
    title:'Baza knjiga',
    caption:'Provjerite bazu knjiga',
    icon:'library_books',
    link:'#/popisknjigabaza'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
