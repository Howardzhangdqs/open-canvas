<template>
    <div class="card">
        <div class="card-inner card-title" style="user-select: none;">
            <span style="width: max-content;">
                {{ $t("ui.card.suggest") }}
            </span>
            <TinyButton class="button-close" icon="maki:cross" size="1.5rem"/>
        </div>
        <hr />
        <div class="card-inner card-content marked" v-html="marked.parse(props.text)">
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { marked } from "marked";

import TinyButton from "./TinyButton.vue";

const i18n = useI18n();

const props = withDefaults(defineProps<Partial<{
    text: string,
}>>(), {
    text: "Enim dolore ullamco nisi sunt duis laborum. Enim sint dolor pariatur voluptate ex commodo. Minim consectetur minim labore aute. Exercitation quis ex aliqua voluptate aute reprehenderit. Quis commodo qui amet proident veniam id. Reprehenderit dolor ut nulla id reprehenderit duis veniam excepteur elit.",
});
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: .2rem;
    align-items: center;
    border-radius: 1.5rem;
    box-shadow: var(--box-shadow);
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.3s;
    padding: .5rem;
    align-items: stretch;
    height: max-content;
}

.card:hover {
    background-color: rgba(0, 0, 0, 0.02);
    box-shadow: var(--box-shadow-hover);
}

.card-inner {
    padding: .2rem .5rem 0 .5rem;
    transition: all 0.3s;
}

.card-title {
    font-weight: bold;

    padding: 0 0 0 .3rem;

    display: flex;
    justify-content: space-between;

    align-items: center;
}

.card-content {
    border-radius: 1rem;
    /* border: solid 1px rgba(0, 0, 0, 0.1); */
}

hr {
    margin: 0;
    background-color: rgba(0, 0, 0, 0.2);
}

.button-close:hover {
    background-color: rgba(255, 0, 0, 0.03);
    border: solid 1px rgba(255, 0, 0, 0.1);
}

.button-close:active {
    background-color: rgba(255, 0, 0, 0.08);
    border: solid 1px rgba(255, 0, 0, 0.2);
}
</style>