<template>
    <div class="button" @click="console.log('send')">
        <Icon :icon="props.icon" :style="{
            width: `calc(${props.size} * 0.6)`,
            height: `calc(${props.size} * 0.6)`,
        }"></Icon>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = withDefaults(defineProps<Partial<{
    size: string,
    icon: string,
}>>(), {
    size: "2rem",
    icon: "mingcute:send-line",
});
</script>

<style scoped>
.button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: v-bind("props.size");
    height: v-bind("props.size");
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.01);
    cursor: pointer;
    transition: all 0.3s;
    border: solid 1px rgba(0, 0, 0, 0);
}

.button:hover {
    background-color: rgba(0, 0, 0, 0.03);
    border: solid 1px rgba(0, 0, 0, 0.1);
}

.button:active {
    background-color: rgba(0, 0, 0, 0.08);
    border: solid 1px rgba(0, 0, 0, 0.2);
}
</style>