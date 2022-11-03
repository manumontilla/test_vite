<template>
  <h1>Con IVA</h1>
  <label> {{ userStore.getContadorConIVA }}</label>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/contador";
const userStore = useUserStore();
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
