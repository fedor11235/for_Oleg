<template>
    <div v-for="item in items" :key="item.id">{{ item.message }}</div>
    <slot-vu >
        <template v-slot:fefe>
            это Фёдор
        </template>
        <template v-slot:oleg>
            это Оля
        </template>
        <template v-slot:default>
            Стандартный
        </template>
    </slot-vu>
</template>

<script>

import SlotVu from '@/components/SlotVu'

export default {
    components: {
        'slot-vu': SlotVu
    },
    data() {
        return {
            items: [
            { 
                id: 2,
                message: 'Oleg'
            },
            { 
                id: 1,
                message: 'Olya'
            },


        ]
    }
}}

</script>

<style>

</style>
