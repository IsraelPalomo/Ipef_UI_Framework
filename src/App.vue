<template>
  <h1>{{ storeState.name }}</h1>
  <h2>{{ store.greetings }}</h2>
  <input
    @change="store.changeName(newNameStore)"
    type="text"
    v-model="newNameStore"
  />
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/details">Details</RouterLink>
  <RouterView />
</template>
<script setup lang="ts">
import { ref, Ref } from 'vue';
import { GlobalStore } from './store/global-store';
const newNameStore: Ref<string> = ref('');
const storeState = GlobalStore().$state;
const store = GlobalStore();
</script>
