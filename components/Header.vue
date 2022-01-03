
<template>
  <div class="bg-purple-600 text-gray-50 h-20 pt-4">
    <div class="wrapper flex justify-between m-auto">
      <div class="text-center">
      <h1 class="fuchidori text-4xl dot-font">ストサポ</h1>
      <p class="fuchidori text-sm dot-font">配信者支援サイト</p>
      </div>
      <nav class="list-none">
        <Nuxt-link to="/">
        <li class="mt-6 fuchidori dot-font"><a>オートチャット</a></li>
        </Nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
})
</script>

