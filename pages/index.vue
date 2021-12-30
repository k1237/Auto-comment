<template>
  <div class="bg-gray-800 mt-16   mx-auto rounded-xl">
    <div class="text-center border-b-2 p-4 text-xl">
      <h1 class="fuchidori dot-font">オートチャット</h1>
    </div>
    <div id="chat" class="mt-2 text-lg h-600 h-fixed overflow-y-auto">
      <comment v-for="(comment, index) in data.comments" :key="index" :Comment="comment" />
    </div>
    <div class="text-center border-t p-6 text-xl">
      <com-footer :Item="data.fire_data"
                  @add-event="addAction"
                  @del-event="deleteAction"/>
    </div>
    <div class="mt-16 pb-16 text-center ">
      <com-explain/>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, reactive,onMounted } from '@vue/composition-api'
let url = "https://auto-comment-65bf4-default-rtdb.firebaseio.com/.json"

type DataType = {
  fire_data:any
  comments: any
}

export default defineComponent({

  setup() {
    const data = reactive<DataType>({
      fire_data:'',
      comments: [],
    });

    const addAction = (comment:any):void =>{
       data.comments.push(comment);
       const chat:any = document.getElementById('chat');
       chat.scrollTop = chat.scrollHeight;
    };

    const deleteAction =():void => {
      data.comments = [];
    }

    const getData= async() =>{
      await axios.get(url).then((result)=>{
        data.fire_data = result.data;
      })
    }

    onMounted(()=>{
      getData();
    })

    return{data,addAction,deleteAction,getData }
  },
})
</script>

<style scoped>
.h-600 {
  height: 600px;
}

.h-fixed {
  min-height: 80%;
  max-height: 80%;
}
</style>
