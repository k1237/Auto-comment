<template>
  <div class="bg-gray-800 h-700 mt-16 w-9/12 mx-auto rounded-xl ">
     <div class="text-center border-b-2 p-4">
       <h1>自動チャット</h1>
    </div>
    <p>{{items[0].title}}</p>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent,} from '@vue/composition-api'

export default defineComponent({ 
  // created?
  async asyncData({ $config }) {
    const { data } = await axios.get(`${$config.apiUrl}`, {
      headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
    })
    return {
      items: data.contents,
    }
  },

  setup() {
   
  },
  
})
</script>

<style scoped>
.h-700 {
  height: 700px;
}
</style>
