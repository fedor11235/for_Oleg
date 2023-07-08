<template>
  <div class="hello">
    ОЛЕГ
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  
  /* background-color: blue; */
  /* margin-left: calc(50% - 100px); */
  /* transition: transformX(-50%); */
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border: 10px solid green;
  border-radius: 25px;
  /* box-shadow: 0px 0px 10px 10px rgba(30, 0, 255, 0.221); */
  /* background: linear-gradient( .25turn,#e66465, #9198e5); */
  /* background: radial-gradient( at 50% 50% ,green, #9198e5, blue); */
  background-image: url("@/assets/img/AKLM0021.JPG");
  background-position: center;
  background-size: contain; 
  background-repeat: no-repeat;
 
}

/* .hello:hover {
  background: linear-gradient( 90deg,#e66465, #9198e5);
 cursor: pointer;
} */

</style>
