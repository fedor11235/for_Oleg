<template>
    <div class="calculate">
      <div class="input" id="input">{{ inputValue }}</div>
      <div class="button" id="one" v-on:click="handkerClick">1</div>
      <div class="button" id="two" v-on:click="handkerClick">2</div>
      <div class="button" id="three" v-on:click="handkerClick">3</div>
      <div class="button" id="four" v-on:click="handkerClick">4</div>
      <div class="button" id="five" v-on:click="handkerClick">5</div>
      <div class="button" id="six" v-on:click="handkerClick">6</div>
      <div class="button" id="seven" v-on:click="handkerClick">7</div>
      <div class="button" id="eight" v-on:click="handkerClick">8</div>
      <div class="button" id="nine" v-on:click="handkerClick">9</div>
      <div class="button plus" id="plus" v-on:click="handkerClick">+</div>
      <div class="button zero" id="zero" v-on:click="handkerClick">0</div>
      <div class="button minus" id="minus" v-on:click="handkerClick">-</div>
      <div class="clear" id="clear" v-on:click="handkerDelALL" >ce</div>
      <div class="enter" id="enter" v-on:click="handkerEnter">=</div>
      <div class="del" id="del" v-on:click="handkerDelOne">c</div>
      <div class="button multiply" id="multiply" v-on:click="handkerClick">*</div>
      <div class="button share" id="share" v-on:click="handkerClick">/</div>
      
    </div>
  </template>

<script setup>
import {ref} from 'vue'

const inputValue = ref('567')

function handkerClick(event) {
  const lastword = inputValue.value.slice(inputValue.value.length - 1)
  if (
      lastword !== '+' && event.target.innerHTML !== '+' ||
      lastword !== '-' && event.target.innerHTML !== '-' 
    ) 
  {
    inputValue.value = inputValue.value + event.target.innerHTML
  }
  
}


function handkerDelALL () {
  inputValue.value = ''
}

function handkerDelOne () {
  inputValue.value = inputValue.value.slice(0, -1);

  // const stroka1 = input.innerHTML
  // const stroka2 = stroka1.slice(0, -1)
  // input.innerHTML = stroka2
}
function handkerEnter (){
  inputValue.value = eval(inputValue.value)
}
</script>

<style scoped>
.calculate{
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 4em;
  grid-gap: 1em;
  background-color: black;
  width: 300px;
  /* height: 500px; */
  border-radius: 10px;
  margin: 100px auto;
  align-items: center;
  color: black;
  box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.047);
}
.button{
  margin: auto;
  width: 60px;
  height: 60px;
  background-color: white;
  top: 10px;
  border-radius: 50%;
  line-height: 60px;
  cursor: pointer;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 650;
  transition: transform .3s;
}
.button:hover{
  background: coral;
  transform: scale(1.1);
}
.button:active{
  transform: scale(0.7);
  filter: brightness(120%);
}

.clear{
  margin: auto;
  width: 60px;
  height: 60px;
  background-color: white;
  top: 10px;
  border-radius: 50%;
  line-height: 60px;
  cursor: pointer;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 650;
  transition: transform .3s;
 }
 .clear:hover{
  background: coral;
  transform: scale(1.1);
}
.clear:active{
  transform: scale(0.7);
  filter: brightness(120%);
}
.del{
  margin: auto;
  width: 60px;
  height: 60px;
  background-color: white;
  top: 10px;
  border-radius: 50%;
  line-height: 60px;
  cursor: pointer;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 650;
  transition: transform .3s;
}
.del:hover{
  background: coral;
  transform: scale(1.1);
}
.del:active{
  transform: scale(0.7);
  filter: brightness(120%);
}
.enter{
  margin: auto;
  width: 60px;
  height: 60px;
  background-color: white;
  top: 10px;
  border-radius: 50%;
  line-height: 60px;
  cursor: pointer;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 650;
  transition: transform .3s;
 }
 .enter:hover{
  background: coral;
  transform: scale(1.1);
}
.enter:active{
  transform: scale(0.7);
  filter: brightness(120%);
}
.input{
  width: calc(100% - 10px);
  height: 28.8px;
  background-color: white;
  grid-column:span 3; 
  padding: 10px 0;
  border-radius: 10px;
  text-align: right;
  padding-right: 10px;
  font-size: 25px;
  font-weight: 700;
}

</style>