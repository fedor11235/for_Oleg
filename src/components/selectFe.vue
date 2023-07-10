<template>
    <div class="tags" id="tags">
    <img src="@/assets/img/layer.svg" alt="" id="foo"  class="dropbtn" v-on:click="onclick">
        Quick filters 
        <img src="@/assets/img/chevron-right.svg" >
    </div>
    
</template>


<script>
// var foo = ""
// foo.onclick = function(){
// 	this.classList.toggle('rotate')
// }
// import {ref} from 'vue'

// const dropbtnValue = ref('')

// function handkerClick(event) {
//   const lastword = dropbtnValue.value.slice(dropbtnValue.value.length)
//   if (
//       lastword !== '' && event.target.innerHTML !== '' ||
//       lastword !== '' && event.target.innerHTML !== '' 
//     ) 
//   {
//     dropbtnValue.value = dropbtnValue.value + event.target.innerHTML
//   }
  
// }
// console.log(handkerClick)
</script>


<style>
.tags{
width: 149px;
height: 36px;
border-radius: 16px;
border: 1px solid var(--light-mode-light-green, #C8F48D);
background: var(--light-mode-bg, #FCFCFC);
display: flex;
/* padding: 8px 12px; */
justify-content: center;
align-items: center;
gap: 6px;
/* background-image: url("@/assets/img/layer.svg");
background-image: url("@/assets/img/chevron-right.svg"); */

}

.img {
  transition: transform 1s ease;
}
.rotate {
  transform: rotate(180deg);
}

</style>

