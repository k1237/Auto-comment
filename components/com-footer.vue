<template>
  <div class="dot-font text-lg">
    <button id="bp" class="btn-pink box-shadow fuchidori " @click="fastClick">
      速め
    </button>
    <button
      id="bg"
      class="btn-green box-shadow ml-2 fuchidori"
      @click="usuallyClick"
    >
      普通
    </button>
    <button
      id="bb"
      class="btn-blue box-shadow ml-2 fuchidori"
      @click="slowClick"
    >
      遅め
    </button>

    <div class="mt-4">
    <button
      id="by"
      class="btn-yellow box-shadow ml-2 fuchidori"
      @click="stopClick"
    >
      ストップ
    </button>
    <button
      id="br"
      class="btn-red box-shadow ml-2 fuchidori"
      @click="resetClick"
    >
      リセット
    </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

type DataType = {
  comment: String
  timer: any
}

type Props = {
  item: string[]
}

export default defineComponent({
  props: {
    item:{
      type:Array,
      // required: true
    },
  },

  setup: (props: Props, context) => {
    const data = reactive<DataType>({
      comment: '',
      timer: '',
    })

    const btninit = (): void => {
      const bp = document.getElementById('bp')
      const bg = document.getElementById('bg')
      const bb = document.getElementById('bb')
      const by = document.getElementById('by')
      const br = document.getElementById('br')

      if (bp === null) return
      bp.classList.remove('none-shadow')

      if (bg === null) return
      bg.classList.remove('none-shadow')

      if (bb === null) return
      bb.classList.remove('none-shadow')

      if (by === null) return
      by.classList.remove('none-shadow')

      if (br === null) return
      br.classList.remove('none-shadow')
    }

    const fastClick = (): void => {
      btninit()

      const bp = document.getElementById('bp')
      if (bp === null) return
      bp.classList.add('none-shadow')

      clearInterval(data.timer)

      data.timer = setInterval(() => {
        const num = Math.floor(Math.random() * props.item.length)
        data.comment = props.item[num]
        context.emit('add-event', data.comment)
      }, 1000)
    }

    const usuallyClick = (): void => {
      btninit()

      const bg = document.getElementById('bg')
      if (bg === null) return
      bg.classList.add('none-shadow')

      clearInterval(data.timer)

      data.timer = setInterval(() => {
        const num = Math.floor(Math.random() * props.item.length)
        data.comment = props.item[num]
        context.emit('add-event', data.comment)
      }, 10000)
    }

    const slowClick = (): void => {
      btninit()

      const bb = document.getElementById('bb')
      if (bb === null) return
      bb.classList.add('none-shadow')

      clearInterval(data.timer)
      data.timer = setInterval(() => {
        const num = Math.floor(Math.random() * props.item.length)
        data.comment = props.item[num]
        context.emit('add-event', data.comment)
      }, 20000)
    }

    const stopClick = (): void => {
      btninit()

      const by = document.getElementById('by')
      if (by === null) return
      by.classList.add('none-shadow')

      clearInterval(data.timer)
    }

    const resetClick = (): void => {
      btninit()

      const br = document.getElementById('br')
      if (br === null) return
      br.classList.add('none-shadow')

      clearInterval(data.timer)
      context.emit('del-event')
    }

    return {
      data,
      btninit,
      fastClick,
      usuallyClick,
      slowClick,
      stopClick,
      resetClick,
    }
  },
})
</script>
