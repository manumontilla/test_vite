<template>
  <h1>Contador</h1>
  <button v-on:click="userStore.addOne()"> Suma 1 a {{ userStore.getContador }}</button>
</template>

<script lang="ts" setup>
import { useUserStore } from "../stores/contador";
const userStore = useUserStore();
</script>
