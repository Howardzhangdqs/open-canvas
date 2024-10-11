<template>
    <div class="button">
        <Icon :icon="props.icon" style="width: 1.2rem; height: 1.2rem;"></Icon>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = withDefaults(defineProps<Partial<{
    size: string,
    icon: string,
}>>(), {
    size: "2.5rem",
    icon: "majesticons:edit-pen-4",
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
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.button:active {
    background-color: rgba(0, 0, 0, 0.1);
}
</style>