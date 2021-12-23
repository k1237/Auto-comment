<template>
  <div class="bg-gray-800 h-700 mt-16 w-9/12 mx-auto rounded-xl">
    <div class="text-center border-b-2 p-4 text-xl">
      <h1>自動チャット</h1>
    </div>
    <div id="chat" class="mt-2 text-lg h-fixed overflow-y-auto">
      <comment v-for="(comment, index) in data.comments" :key="index" :Comment="comment" />
    </div>
    <div class="text-center border-t p-4 text-xl">
      <com-footer :Item="items"
                  @add-event="addAction"
                  @del-event="deleteAction"/>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, reactive } from '@vue/composition-api'

type DataType = {
  comments: any
}

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
    // data
    const data = reactive<DataType>({
      comments: [],
    });
    // methods
    const addAction = (comment:any):void =>{
       data.comments.push(comment);
       const chat:any = document.getElementById('chat');
       chat.scrollTop = chat.scrollHeight;
    };

    const deleteAction =():void => {
      data.comments = [];
    }

    return{data,addAction,deleteAction }
  },
})
</script>

<style scoped>
.h-700 {
  height: 700px;
}

.h-fixed {
  min-height: 80%;
  max-height: 80%;
}
</style>
