<template>
 <div class="input" id="input">{{ say }}</div>
  <did class="game"> 
      <div class="red" id="one" v-on:click="handkerClick('red')"></div>
      <div class="red" id="two" v-on:click="handkerClick('red')"></div>
      <div class="red" id="three" v-on:click="handkerClick('red')"></div>
      <div class="green" id="four" v-on:click="handkerClick('green')"></div>
      <div class="green" id="five" v-on:click="handkerClick('green')"></div>
      <div class="green" id="six" v-on:click="handkerClick('green')"></div>
      <div class="black" id="seven" v-on:click="handkerClick('black')"></div>
      <div class="black" id="eight" v-on:click="handkerClick('black')"></div>
      <div class="black" id="nine" v-on:click="handkerClick('black')"></div>
</did>
</template>
<script>
export default {
  name: 'GameTimp',
  data() {
    return {
      color: ''
    }
  },
  methods: {
    handkerClick(color) {
      this.color = color;
    }
  },
  computed:{
    say() {
      if(this.color == 'red') {
        return 'опасно'
      }
      if(this.color == 'green') {
        return 'красиво'
      }
      if(this.color == 'black') {
        return 'грязно'
      }
      return 'я не знаю'
    }
  },
  watch: {
    color(newVal, oldVal) {
      alert('мы поменяли секретную строку с: ' + oldVal + ' на: ' + newVal)
    }
  }
}


// function handkerClick() {
// }


</script>

<style>
  .game{ padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 3em;
  grid-gap: 1em;
  /* background-color: black; */
  width: 300px;
  /* height: 500px; */
  border-radius: 10px;
  margin: 100px auto;
  align-items: center;
  /* color: black; */
  box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.047);

  }
  
  .red{
  margin: auto;
  width: 80px;
  height: 60px;
  background-color: red;
  top: 10px;
  border-radius: 25%;
  line-height: 60px;
  cursor: pointer;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 650;
  transition: transform .3s;
  color: black;

}

/* .red:hover{
  background: red;
  transform: scale(1.1); */
/* } */
.red:active{
  transform: scale(0.7);
  filter: brightness(120%);
}
.green{
  margin: auto;
  width: 80px;
  height: 60px;
  background-color: green;
  top: 10px;
  border-radius: 25%;
  line-height: 60px;
  cursor: pointer;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 650;
  transition: transform .3s;
  color: black;

}
/* .green:hover{
  background: rgb(94, 46, 28);
  transform: scale(1.1);
} */
.green:active{
  transform: scale(0.7);
  filter: brightness(120%);
}

/* .red:hover{
  background: rgb(94, 46, 28);
  transform: scale(1.1);
} */
.red:active{
  transform: scale(0.7);
  filter: brightness(120%);
}
.black{
  margin: auto;
  width: 80px;
  height: 60px;
  background-color: black;
  top: 10px;
  border-radius: 25%;
  line-height: 60px;
  cursor: pointer;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 650;
  transition: transform .3s;
  color: aliceblue;

}
/* .black:hover{
  background: rgb(94, 46, 28);
  transform: scale(1.1);
} */
.black:active{
  transform: scale(0.7);
  filter: brightness(120%);
}


.input{
  width: 300px;
  height: 150px;
  border: 4px solid black;
  margin: auto;
  padding: 20px;
}
</style>
