<template>
  <div class="counter">
    <div class="button" id="one" v-on:click="handkerClick">+</div>
    <div class="input" id="input">{{ inputValue }}</div>
    <div class="button" id="two" v-on:click="handkerMinus">-</div>
  </div>
</template>
<script setup>
import {ref} from 'vue'

const inputValue = ref(0)

function handkerClick(){
  inputValue.value = inputValue.value +1
}

function handkerMinus(){
  inputValue.value = inputValue.value -1
}

</script>

<style scoped>
.counter{
  padding: 16px;
 display: flex;
  
}

.button{
  margin: auto;
  width: 60px;
  height: 60px;
  background-color: plum;
  border-radius: 50%;
  line-height: 60px;
  cursor: pointer;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 650;
  transition: transform .3s;
}

.input{
  width: 160px;
  height: 60px; 
  background-color: plum;
  
}

</style>
