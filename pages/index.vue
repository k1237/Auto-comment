<template>
  <h1 class="markdown">メインぺージ{{ data.test }}</h1>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, reactive, onMounted } from '@vue/composition-api'

type DataType = {
  test: string
}

export default defineComponent({
  setup() {
    const data = reactive<DataType>({
      test: '',
    })

    onMounted(() => {
      getApi()
    })

    const getApi = async function () {
      const url = 'https://auto-comment.microcms.io/api/v1/rist'
      await axios
        .get(url,{ headers: { 'X-MICROCMS-API-KEY' : 'eb9b25a1c950460a8d647d6a0f255741c669' } })
        .then((response) => {
          data.test = response.data
          console.log(response)
        })
        .catch(function (error) {
          console.log(error.response.data)
        })
    }
    return { data, getApi }
  },
})
</script>
