<template v-slot:futter>
  <div class="fefe">
    <slot name="fefe"></slot>
  </div>

  <div class="oleg">
    <slot name="oleg"></slot>
  </div>

  <div class="default">
    <slot></slot>
  </div>
 
</template>

<script>


</script>

<style>
.fefe {
  height: 50px;
  width: 200px;
  background-color: blueviolet;

}
.oleg {
  height: 50px;
  width: 200px;
  background-color: pink;
}
.default {
  height: 50px;
  width: 200px;
  background-color: green;
}
</style>

