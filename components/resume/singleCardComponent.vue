<template>
    <v-card class="mx-auto" max-width="344">
        <v-img :src="item.image" class="img-fluid"></v-img>
        <v-card-text class="m-0 pa-0 w-100 purple">
            <v-list shaped class="pa-0 w-100">
                <v-subheader>پروژه های انجام شده</v-subheader>
                <v-list-item-group v-model="item.text" class>
                    <v-list-item color="info" class="pa-0" @click.prevent="showPracticeProjecctDialog(item.identity)">
                        <v-list-item-icon class="ml-1">
                            <v-icon>mdi-webpack</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>پروژه های تمرینی</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon class="pa-0">
                            <v-badge color="deep-purple accent-4" content="99+" inline transition="slide-x-transition" top></v-badge>
                        </v-list-item-icon>
                    </v-list-item>
                    <!-- second list item in here -->
                    <v-list-item color="info" class="pa-0" @click.prevent="showRealProjectDialog">
                        <v-list-item-icon class="ml-1">
                            <v-icon>mdi-webpack</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>پروژه های واقعی</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon class="pa-0">
                            <v-badge color="deep-purple accent-4" content="99+" inline transition="slide-x-transition" top></v-badge>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-btn text>Share</v-btn>
            <v-btn color="purple" text>Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="item.show = !item.show">
                <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="item.show" class="p-absolute">
                <v-divider></v-divider>
                <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to
                    that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    },
    data:()=>({
      identity: 'undefined'

    }),
    methods: {
        showPracticeProjecctDialog(identity = 'undefined') {
        if (identity.length) {
            this.identity = identity
        }
        this.$store.commit('resume/togglePracticeDialog')
        },
        showRealProjectDialog() {
        this.$store.commit('resume/toggleRealDialog')
        },
    },
}
</script>