<template >
    <div class="button1" id="one" v-on:click="handkerClick">{{ text }}</div>
    <div v-if="type === 'A'"></div>
    <div v-else>
  А теперь — нет
</div>>
    <div class="button2" id="two" v-on:click="replacementClick">{{ type }}</div>
 <slot name="futter"></slot>

</template>

<script>
export default {
  name: 'SlideError',
  data() {
    return {
      text: 'не меняем',
      type: 'A'
    }
  },
  methods: {
    handkerClick() {
      this.text = 'меняем';
    },
    replacementClick() {
      this.type = 'B';
    }
  },

  
  beforeCreate() {
    console.log('beforeCreate Вызывается синхронно сразу после инициализации')
  },
  created() {
    console.log('created Вызывается синхронно после создания экземпляра')
  },
  beforeMount() {
    console.log('beforeMount Вызывается непосредственно перед началом монтирования: функция render будет вызываться в первый раз.')
  },
  mounted() {
    console.log('mounted Вызывается после монтирования экземпляра, где элемент, переданный в app.mount, заменяется вновь созданным vm.$el')
  },
  beforeUpdate() {
    console.log('beforeUpdate Вызывается при изменении данных, перед обновлением DOM. ')
  },
  updated() {
    console.log('updated Вызывается после того, как обновится виртуальный DOM из-за изменений данных. ')
  },
  activated() {
    console.log('activated Вызывается при активации компонента внутри <keep-alive>.')
  },
  deactivated() {
    console.log('deactivated Вызывается после деактивации компонента внутри <keep-alive>.')
  },
  beforeUnmount() {
    console.log('deactivated Вызывается перед размонтированием экземпляра компонента.')
  },
  unmounted() {
    console.log('unmounted Вызывается после того, как экземпляр компонента размонтирован.')
  },
  errorCaptured() {
    console.log('errorCaptured Вызывается, когда фиксируется ошибка из любого дочернего компонента')
  },
  renderTracked() {
    console.log('errorCaptured Вызывается при отслеживании перерисовки виртуального DOM')
  },
  renderTriggered() {
    console.log('renderTriggered Вызывается при срабатывании перерисовки виртуального DOM.')
  }
}


</script>

<style>
.button1{
    background-color: greenyellow;
    padding: 18px;
}
.button2{
    background-color: greenyellow;
    padding: 18px;
}
</style>