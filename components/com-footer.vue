<template>
  <div>
    <button class="btn-pink" @click="fastClick">速め</button>
    <button class="btn-green" @click="usuallyClick">普通</button>
    <button class="btn-blue" @click="slowClick">遅め</button>
    <button class="btn-yellow" @click="stopClick">ストップ</button>
    <button class="btn-pink" @click="resetClick">リセット</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

type DataType = {
  comment: String
  timer: any
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
      timer: '',
    })

    //methods
    const usuallyClick = (): void => {
      data.timer = setInterval(() => {
        const num = Math.floor(Math.random() * props.Item.length)
        data.comment = props.Item[num].title
        context.emit('add-event', data.comment)
      }, 300)
    }

    const stopClick = (): void => {
      clearInterval(data.timer)
    }

    const resetClick = (): void => {
      clearInterval(data.timer)
      context.emit('del-event')
    }

    return { data, usuallyClick, stopClick,resetClick  }
  },
})
</script>
