<template>
 <!-- زبان های برنامه نویسی -->
  <div>
    <h5 class="pb-1 teal--text">زبانهای برنامه نویسی</h5>
    <hr class="pink darken-1" />
    <v-row justify="center">
      <v-col v-for="item in programingLanguages" :key="item.id" lg="3" md="4" sm="6" xs="12" align="center">
        <template>
          <!-- signle child head component -->
          <singleHeadComponent :data="item"/>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import singleHeadComponent from '~/components/resume/childs/singleHeadComponent'

  export default {
    components:{
      singleHeadComponent
    },
    data:()=>({
      hover: true,
      // this data is here because web have to get data from server when create life cycle hook.
      programingLanguages: [{
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: 'پروژه 12',
          icon: 'mdi-language-php',
          image: 'data:image/png;base64,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'
        },
        {
          id: Math.random().toString() + Math.random().toString() + 2,
          show: false,
          text: 'پروژه 12',
          icon: 'mdi-language-javascript',
          image: 'data:image/png;base64,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'
        }
      ],
    })
  }
</script>