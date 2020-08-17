<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col lg="5" md="6" sm="8" xs="12">
        <v-card class="ml-auto">
          <v-row center>
            <v-col cols="4">
              <v-avatar class size="95" rounded>
                <img src="@/assets/images/programmer.png" />
              </v-avatar>
            </v-col>

            <v-col cols="8">
              <v-row justify="center">
                <v-col cols="12">
                  <h2 class="teal--text">با سلام</h2>
                  <p class="info--text">با سلام به وبسایت من خوش آمدید</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card-text class="m-0 py-0">
            <p>من محمد راوند هستم، برنامه نویس و توسعه دهنده وبسایت</p>
            <p>عاشق علم و تکنولوژی بخصوص در زمینه وبسایت</p>
            <p>خودجوش خودآموزم عاشق کدنویسی، آموزش، کتابخوانی و ساخت چیزهای جدید هستم</p>
            <p>فردی پر محبّت ، متنفّر از دروغ ، واقعاْ قدرتمند ، ثابت قدم ، عاشق شهرت، دارای خشمی طوفانی ام.</p>
          </v-card-text>

          <v-card-subtitle class="pb-0 pt-0 mb-3">مهارت و تخصص های من</v-card-subtitle>

          <v-card-text class="text--primary">
            <v-row justify="space-around">
              <v-icon large color="green darken-2">mdi-vuejs</v-icon>

              <v-icon large color="blue darken-2">mdi-nuxt</v-icon>

              <v-icon large color="pink darken-5" title="laravel">mdi-laravel</v-icon>

              <v-icon large color="blue darken-2" title="vuetify">mdi-vuetify</v-icon>

              <v-icon large color="purple darken-2">mdi-bootstrap</v-icon>
            </v-row>

            <v-list rounded>
              <v-list-item-group v-model="item" color="indigo darken-4">
                <v-list-item v-for="(item, i) in items" :key="i" class="light-blue accent-3" @click.prevent="goResumePage">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-content v-text="item.text"></v-list-item-content>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>

          <v-card-actions class="pt-0">
            <div class="text-center pb-4">
              <v-menu top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="light-blue darken-4"
                    class="white--text"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >دنبال کردن در شبکه های اجتماعی</v-btn>
                </template>
                <!-- follow developer in social medias -->
                <v-list shaped>
                  <v-subheader>REPORTS</v-subheader>
                  <v-list-item-group v-model="item" color="teal">
                    <v-list-item v-for="(item, i) in menues" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      item: 1,
      items: [
        { text: 'پروژه ها و رزمه ی من ', icon: 'mdi-badge-account-horizontal' }
      ],
      menues:  [
        { text: 'whatsapp', icon: 'mdi-whatsapp' },
        { text: 'telegram', icon: 'mdi-telegram' },
        { text: 'instagram', icon: 'mdi-instagram' },
        { text: 'linkedin', icon: 'mdi-linkedin' },
      ],
    }
  },
  methods: {
    goResumePage(){
      this.$router.push({
          path: '/resume'
      })
    }
  },
}
</script>

<style scoped>
.p-0{
  padding-top:0 !important;
  padding-bottom:0 !important;
}
</style>
