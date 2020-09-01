<template slot="projectContentDialog">
  <v-card max-width="344" class="mx-auto">
    <p class="text-center"></p>
    <v-card-title primary-title class="blue accent-4 text-center py-0">
      <p class="my-0 py-2">سایت فروشگاهی مونیکا</p>
    </v-card-title>
    <!-- <v-img
    src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
    height="194"
    ></v-img>-->
    <div class="max-h-300">
      <v-carousel class="max-h-300" interval="200">
        <v-carousel-item
          class="rounded"
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          max-height="300px"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>

    <v-card-text>
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item) in projectItems" :key="item.id">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
              <v-list-item-title v-if="item.subIcons">
                <v-tooltip top v-for="subIcon in item.subIcons" :key="subIcon.id">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      :color="subIcon.color"
                      :title="subIcon.tooltop"
                      v-text="subIcon.icon"
                    ></v-icon>
                  </template>
                  <span v-text="subIcon.tooltip"></span>
                </v-tooltip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="teal accent-1" class="pink">مطالعه ی بیشتر</v-btn>
      <v-spacer></v-spacer>
      <!-- start snackbars -->
      <v-btn @click="snackbar = true" icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-snackbar v-model="text" color="indigo darken-1">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="lime" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
      <!-- end snackbars -->
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>



<script>
export default {
  data() {
    return {
      // dialog: false,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      projectItems: [
        { text: 'لینک وبسایت', icon: 'mdi-link' },
        { text: 'مستندات پروژه', icon: 'mdi-file-document' },
        { text: 'تکنولوژی های استفاده شده',
         icon: 'mdi-web',
         subIcons:[
           {icon:'mdi-vuejs', color:"teal", tooltip:'vuejs'},
           {icon:'mdi-vuetify', color:"blue accent-2", tooltip:'vueitfy'},
           {icon:'mdi-nuxt', color:"green darken-2", tooltip:'nuxtjs'}
          ]
        },
      ],
      snackbar: false,
      text:'نظر شما با موفقیت ثبت شد'

    }
  },
  computed: {
    dialog:{
      get(){
        return this.$store.state.resume.practiceDialog;
      },
      set(value){
        this.$store.commit('resume/togglePracticeDialog')
      }
    }
  },
}
</script>
<style scoped>
  .max-h-300{
    max-height: 300px !important;
  }

</style>
