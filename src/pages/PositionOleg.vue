<template>
  <div class="сontainer">
    <div class="elem blue"></div>
    <div class="elem red"></div>
    <div class="elem gray"></div>
    <div class="elem pink"></div>
    <div class="imba"></div>
  </div>
</template>

<script>
export default {
  name: 'PositionOleg'
}
</script>

<style scoped>
.elem {
  /* display: inline-block; */
  /* width: 100px;
  height: 100px; */
}
.сontainer{
  position: relative;
  display: flex;
  background-color: black;
  height: 50vh;
  width: 100vw;
  /* flex-direction: column;
    align-content: flex-end;
    justify-content: space-between;
    align-items: center; */
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5px;
    
}
.imba {
  position: absolute;
  /* position: fixed; */
  width: 100px;
  height: 100px;
  background-color: green;
  bottom: -10px;
  left: 20px;
  transition: all .3s;
  cursor: pointer;
}
.imba:hover {
  bottom: -30px;
}
.imba:active {
  transform: scale(1.1);
}
.blue {
  background-color: blue;
}
.red{
  background-color: red;
}
.gray{
  background-color: gray;
}
.pink{
  background-color: pink;
}
</style>
