 <template>
  <v-container grid-list-xs v-cloak>
    <v-row>
      <v-col cols="12">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card class="">
            <v-img :src="imageHeader" height="194" width="100%">
              <!-- <v-toolbar dark color="hide" :style="'background: url('+imageHeader+') no-repeat center center;background-size: cover'"> -->
              <v-toolbar dark color="hide" :style="'background:transparent;box-shadow:none;'">
                <v-btn icon class="pink" @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
            </v-img>

            <!-- <v-toolbar dark color="hide" :style="'background: url('+imageHeader+') no-repeat center center;background-size: cover'"> -->
            <!-- <v-row dark color="hide" :style="'background:transparent;box-shadow:none;'"> -->
              <v-col cols="12" justify="center">
                <h6
                  class="text-center text-h5 text-center mt-1 py-3 theme--light elevation-2 v-card-text amber--text text-shadow"
                  v-text="titleHeader"
                ></h6>
              </v-col>
            <!-- </v-row> -->

            <v-card-text>
              <v-row>
                <v-col v-for="item in 5" :key="item">
                  <slot name="projectContentDialog"></slot>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">Read</v-btn>
              <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  props: {
    imageHeader: {
      type: String,
      required: true
    },
    titleHeader: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      // dialog: false,
      notifications: true,
      sound: true,
      widgets: true,

      item: 1
    }
  },
  computed: {
    dialog: {
      get() {
        return this.$store.state.resume.practiceDialog
      },
      set(value) {
        this.$store.commit('resume/togglePracticeDialog')
      }
    }
  }
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 1px rgb(3, 253, 178);
  color: rgb(88, 3, 200) !important;
  font-weight: bold;
}
</style>

