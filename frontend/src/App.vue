<template>
    <fieldset role="groupe"></fieldset>
<div v-if="todos.length == 0">Vous n'avez pas de tâches à faire</div>
</template>

<script setup>
import {ref} from 'vue';

const todos = ref([])
</script>

<style>
</style>