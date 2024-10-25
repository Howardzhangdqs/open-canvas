<template>
    <div class="dialoge">
        <template v-for="(item, index) in data" :key="index">
            <hr v-if="index != 0"/>
            <div class="slide-item">
                <Icon :icon="item.icon" style="width: 1.2rem; height: 1.2rem;"></Icon>
                <span class="slide-text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed } from "vue";

type Alternatives = {
    icon: string,
    text: string,
}[];

const props = withDefaults(defineProps<Partial<{
    icon: string,
    options: Alternatives,
}>>(), {
    icon: "majesticons:edit-pen-4",
});

const data = computed(() => {
    return props.options ?? [];
});
</script>

<style scoped>
.dialoge {
    display: inline-flex;
    flex-direction: column;
    border-radius: 2rem;
    background-color: rgba(0, 0, 0, 0.01);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: all 0.3s;
    padding: .5rem;
}

.slide-item {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border-radius: 3rem;
    padding: 0 .8rem 0 .9rem;
    transition: all 0.3s;
    user-select: none;
}

.slide-item:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.slide-item:active {
    background-color: rgba(0, 0, 0, 0.1);
}

.slide-text {
    margin: .5rem 0;
}
</style>