<template>
  <v-card color="white pt-5">
    <v-card-actions>
      <v-badge
        :value="hover"
        color="deep-purple accent-4"
        :content="publicData.text"
        left
        transition="slide-x-transition"
        class="mx-auto"
      >
        <v-icon color="indigo" size="70">{{ publicData.icon }}</v-icon>
      </v-badge>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      required:true
    }
  },
  data: () => ({
    hover:true,
  }),
  computed:{
    publicData(){
      return this.data;
    }
  }
}
</script>