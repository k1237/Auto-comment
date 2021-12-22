<template>
  <div>
    <button class="btn-pink">速め</button>
    <button class="btn-green" @click="usuallyClick">普通</button>
    <button class="btn-blue">遅め</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

type DataType = {
  comment: String
}

type Props = {
  Item: any
}

export default defineComponent({
  props: {
    Item: Array,
  },

  setup: (props: Props, context) => {
    //data
    const data = reactive<DataType>({
      comment: '',
    })

    //30秒に一回itemsの中からランダムにtitleを抽出し、commentsに保存
    const usuallyClick = (): void => {
      setInterval(() => {
        const num = Math.floor(Math.random() * props.Item.length)
        data.comment = props.Item[num].title
        context.emit('add-event', data.comment)
      }, 300)
    }

    return { data, usuallyClick }
  },
})
</script>
