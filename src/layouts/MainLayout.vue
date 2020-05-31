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
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          PrevFourFuture
        </q-toolbar-title>
        <q-space />
        <q-btn-dropdown flat color="primary" text-color="white" :label="`Funcesp`" dense>
          <!-- <q-item v-close-popup @click="changePassword">
            <q-item-section>
              <q-item-label>CNPJ: 62.465.117/0001-06</q-item-label>
            </q-item-section>
          </q-item> -->
          <q-separator/>
          <q-item clickable v-close-popup @click="logout">
            <q-item-section avatar>
              <q-avatar icon="exit_to_app" size="md"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Sair</q-item-label>
            </q-item-section>
          </q-item>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
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

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Cadastro Convênios',
          caption: '',
          icon: 'business',
          link: '/convenios'
        },
        {
          title: 'Clientes',
          caption: '',
          icon: 'supervised_user_circle',
          link: '/clientes'
        },
        {
          title: 'Solicitação de Aportes',
          caption: '',
          icon: 'attach_money',
          link: '/aportes'
        }
      ]
    }
  }
}
</script>
