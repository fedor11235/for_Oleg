<template>
    <div class="router">
      <div div class="button" @click="handkerClick('/')">
        <router-link to="/">базовые</router-link>
      </div>
      <div div class="button" @click="handkerClick('/counter')">
        <router-link to="/counter">счетик</router-link>
      </div>
      <div div class="button" @click="handkerClick('/calculate')"> <router-link to="/calculate">калькулятор</router-link></div>
      <div div class="button" @click="handkerClick('/calcul')"><router-link to="/calcul">калькулятордемо</router-link></div>
      <div div class="button" @click="handkerClick('/gametimp')"><router-link to="/gametimp">игра</router-link></div>
      <div div class="button" @click="handkerClick('/error')"><router-link to="/error">методы</router-link></div>
      <div div class="button" @click="handkerClick('/vifor')"><router-link to="/vifor">слоты</router-link></div>
      <div div class="button" @click="handkerClick('/newcompany')"><router-link to="/newcompany">другое</router-link></div>
      
 </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  methods: {
    handkerClick(path){
      this.$router.push({ path })
    }
  }
}

</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
    /* height: 200vh; */
    /* width: 100%; */
  }
  body {
    margin: 0;
    /* width: 50vw;
    height: 50vh; */
  }
  .router {
  
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(10, auto);
  /* grid-auto-rows: 5 em; */
  /* grid-gap: 1em; */
  /* margin: 100px auto; */
  width: auto;
  height: auto;
  background-color: rgb(162, 232, 255);
  /* margin-left: auto;
   display: flex; */
  align-items: center;
}

  .button{
  /* margin: auto;
  width: 80px;
  height: 60px; */
  /* background-color: rgb(71, 0, 0); */
  /* top: 10px; */
  /* border-radius: 25%; */
  line-height: 40px;
  /* cursor: pointer; */
  /* user-select: none; */
  font-family: 'Segoe UI';
  font-size: 16px;
  /* font-weight: 650; */
  /* transition: transform .3s; */

}
/* .button:hover{
  /* background: rgb(94, 46, 28); */
  /* transform: scale(1.1);
} */ 
/* .button:active{
  transform: scale(0.7);
  filter: brightness(120%);
} */
a {
  
  text-decoration:none;
  color: rgb(42, 43, 76);
}
/* .inpud{
  width: auto;
  height: auto;
  background-color: rgb(162, 232, 255);
  /* margin-left: auto;
   display: flex; */
  /* align-items: center;
} */ 

</style>
