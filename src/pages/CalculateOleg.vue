<template>
    <div class="calculate">
      <div class="input" id="input"></div>
      <div class="button" id="one">1</div>
      <div class="button" id="two">2</div>
      <div class="button" id="three">3</div>
      <div class="button" id="four">4</div>
      <div class="button" id="five" >5</div>
      <div class="button" id="six">6</div>
      <div class="button" id="seven">7</div>
      <div class="button" id="eight">8</div>
      <div class="button" id="nine">9</div>
      <div class="button plus" id="plus">+</div>
      <div class="button zero" id="zero">0</div>
      <div class="button minus" id="minus">-</div>
      <div class="clear" id="clear">ce</div>
      <div class="enter" id="enter">=</div>
      <div class="del" id="del">c</div>
      <div class="button multiply" id="multiply">*</div>
      <div class="button share" id="share">/</div>
      
    </div>
  </template>

<script setup>
let input

document.addEventListener("DOMContentLoaded", ready)

function ready() {
  input = document.getElementById("input")
  document.getElementsByClassName('button');
  const buttons = document.getElementsByClassName ("button")

  for (const button of buttons) {
    button.addEventListener("click", handkerClick)
  }

  const buttonClear = document.getElementById("clear")
  buttonClear.addEventListener("click", handkerDelALL)
  const buttonDel = document.getElementById("del")
  buttonDel.addEventListener("click", handkerDelOne)
  const buttonEnter = document.getElementById("enter")
  buttonEnter.addEventListener("click", handkerEnter)
}

function handkerClick(event) {
  const lastword = input.innerHTML.slice(input.innerHTML.length - 1)
  console.log(lastword)
  if (
      lastword !== '+' && event.target.innerHTML !== '+' ||
      lastword !== '-' && event.target.innerHTML !== '-' 
    ) 
  {
    input.innerHTML = input.innerHTML + event.target.innerHTML
  }
  
}


function handkerDelALL () {
  input.innerHTML = ''
}

function handkerDelOne () {
  input.innerHTML = input.innerHTML.slice(0, -1);

  // const stroka1 = input.innerHTML
  // const stroka2 = stroka1.slice(0, -1)
  // input.innerHTML = stroka2
}
function handkerEnter (){
  input.innerHTML = eval(input.innerHTML)
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