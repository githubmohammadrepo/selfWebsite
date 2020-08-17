<template>
  <v-app dark>
    <!-- right navigations -->
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-main>
            <v-list-item-title v-text="item.title" />
          </v-list-item-main>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- middle navs in head navbar -->
      <!-- articles -->
      <v-btn icon @click.stop="fixed = !fixed" title="مقالات">
        <v-icon>mdi-book-open-variant</v-icon>
      </v-btn>
      <!-- projects -->
      <v-btn icon @click.stop="fixed = !fixed" title="پروژه های انجام شده">
        <v-icon>mdi-briefcase-check</v-icon>
      </v-btn>
      <!-- library -->
      <v-btn icon @click.stop="fixed = !fixed" title="کتابخانه">
        <v-icon>mdi-bookshelf</v-icon>
      </v-btn>
      <!-- discution -->
      <v-btn icon @click.stop="fixed = !fixed" title="پرسش و پاسخ">
        <v-icon>mdi-chat</v-icon>
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <img id="default-background" src="@/assets/images/newResume.png" />
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'صفحه اصلی',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
