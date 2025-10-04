<template>
    <section>
        <h1>Counter</h1>
        <h3>{{ number }}</h3>
        <div class= "buttons">
            <button @click="count++">add</button>
            <button @click="count--">minus</button>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
const number = ref(0)
const add = ( ) => {
    number.value++
}
const minus = ( ) => {
    number.value--
}
</script>

<style scope>
h1{
    text-align: center;
}

.buttons button{
    padding: 5px 5px;
    margin: 5px;
    border-radius: 8px;
    background:chocolate ;
}

.buttons button:hover{
    background:yellow;
    transform: translateY(-2px)
}

</style>