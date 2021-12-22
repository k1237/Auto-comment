<template>
  <div class="flex border-b">
    <h1>〇：</h1>
    <p>{{Comment}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props:{
        Comment:Object
    }
})
</script>

