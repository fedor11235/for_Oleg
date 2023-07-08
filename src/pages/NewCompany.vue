<template>
 <!-- <input type="text" name="text" :value="keke" @input="handlerInput"/> -->
 {{ keke }}
 <input v-model="keke" />
</template>

<script setup>
import { ref } from 'vue'

let keke = ref(56)

// function handlerInput(event) {
//     keke.value = event.target.value
// }


</script>

<style>

</style>