<template>
  <div class="flex border-b p-2">
    <p>{{comment}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props:{
        comment:{
          type:Object,
          default:()=>{},
          // required:true,
        }
    }
})
</script>

