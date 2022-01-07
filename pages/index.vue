<template>
  <div class="bg-gray-800 mt-16 mx-auto rounded-xl">
    <div class="text-center border-b-2 p-4 text-xl">
      <h1 class="fuchidori dot-font">オートチャット</h1>
    </div>
    <div id="chat" class="mt-2 text-lg h-96 md:h-600 overflow-y-auto">
      <com-main
        v-for="(comment, index) in data.comments"
        :key="index"
        :comment="comment"
      />
    </div>
    <div class="text-center border-t p-6 text-xl">
      <com-footer
        :item="data.fireData"
        @add-event="addAction"
        @del-event="deleteAction"
      />
    </div>
    <div class="mt-16 pb-16 text-center">
      <com-explain />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from '@vue/composition-api'
import axios from '../plugins/axios'

type DataType = {
  fireData: object
  comments: string[]
}

export default defineComponent({
  setup() {
    const data = reactive<DataType>({
      fireData: null,
      comments: [],
    })

    const addAction = (comment: any): void => {
      data.comments.push(comment)
      const chat: any = document.getElementById('chat')
      chat.scrollTop = chat.scrollHeight
    }

    const deleteAction = (): void => {
      data.comments = []
    }

    const getData = async () => {
      await axios.get('/.json').then((result) => {
        data.fireData = result.data
      })
    }

    onMounted(() => {
      getData()
    })

    return { data, addAction, deleteAction, getData }
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
