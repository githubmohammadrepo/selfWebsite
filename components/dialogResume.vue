 <template>
  <v-dialog v-model="dialog" v-cloak fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card class>
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
          <!-- show spinner when data is coming from server -->
          <v-col v-if="showSpinner" align="center">
            <v-progress-circular indeterminate color="primary" size="122" class="mt-5"></v-progress-circular>
          </v-col>
          <!-- show all data from server -->
          <v-col v-else v-for="image in images" :key="image.id">
            <projectResume :title="image.title" :image="image.url"></projectResume>
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
</template>


<script>
import projectResume from '~/components/projectResume'

export default {
  props: {
    imageHeader: {
      type: String,
      required: true
    },
    titleHeader: {
      type: String,
      required: true
    },
    identity: {
      type: String,
      required: true
    }
  },
  components: {
    projectResume
  },
  async fetch() {
    // prerequirts
    this.$store.commit('resume/toggleShowSnackbar',false)
    this.start = true
    this.end = false
    //sent with parameter identity prop for get html infos
    console.log('start:' + this.start, 'end: ' + this.end)

    let images = await this.$store.dispatch('resume/getImages',this.identity)
    console.log(images)

    if (images) {
      console.log('success success success')
      //success
      this.start = false
      this.end = true
      this.images = images
    } else {
      this.end = true
      this.$store.commit('resume/togglePracticeDialog')
      this.$store.commit('resume/toggleShowSnackbar')
      this.$store.commit('resume/setSnackbarStatusText','دسترسی به اینترنت وجود ندرد')
    }
    console.log('start:' + this.start, 'end: ' + this.end)

  },
  fetchOnServer: false,
  data() {
    return {
      images: [],
      dialog: true,
      notifications: true,
      sound: true,
      widgets: true,
      item: 1,
      start: true,
      end: false
    }
  },
  computed: {
    showSpinner() {
      console.log('normal start: ', this.start)
      console.log('normal end: ', this.end)
      // return true;
      if (this.start == true && this.end == false) {
        console.log('show dialog ')
        return true //show spinner
      } else if (this.start == false && this.end == true) {
        //close spinner and result is success
        console.log('close dialog success')
        return false
      } else if (this.start == true && this.end == true) {
        console.log('error  this.start: ', this.start)
        console.log('error  this.end: ', this.end)
        console.log('close dialog error')
        //close spinner and result is error accured when get data from server
        return false
      } else {
        //do some thing else
        console.log('some thing was wrong')
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

