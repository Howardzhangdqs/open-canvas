<template>
  <div class="container">
    <div style="
      display: flex;
      gap: 1.5rem;
      justify-content: flex-end;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 1rem;
    ">
      <Editor />
      <Card style="width: calc(var(--width) * 0.3)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import Editor from "./components/Editor.vue";
import Card from "./components/Card.vue";
import { useI18n } from "vue-i18n";


</script>

<style scoped>
.container {
  border: solid 1px rgba(0, 0, 0, 0.1);
  margin: auto;
}
</style>
