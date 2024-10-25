<template>
    <div class="dialoge">
        <div class="dialoge-inner">
            <textarea :placeholder="i18n.t('ui.dialoge.placeholder')" rows="1" v-model="model" ref="input" class="textarea" @change="auto_resize"></textarea>
        </div>

        <TinyButton />
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import TinyButton from "./TinyButton.vue";

const i18n = useI18n();

const model = defineModel<string>({ required: true });

const input = ref<HTMLInputElement | null>(null);

const auto_resize = () => {
    console.log(input.value!.scrollHeight);
    input.value!.style.height = "auto";
    input.value!.style.height = input.value!.scrollHeight + "px";
};

watch(model, auto_resize);

onMounted(auto_resize);
</script>

<style scoped>
.dialoge {
    display: flex;
    gap: .2rem;
    flex-direction: row;
    align-items: center;
    border-radius: 1.5rem;
    background-color: rgba(0, 0, 0, 0.01);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: all 0.3s;
    padding: .5rem;

}

.dialoge-inner {
    padding: .2rem .5rem 0 .5rem;
    border-radius: 1rem;
    border: solid 1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}

.dialoge-inner:focus-within {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    border: solid 1px rgba(0, 0, 0, 0.15);
    background-color: rgba(0, 0, 0, 0.02);
}

.textarea {
    height: auto;
    resize: none;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    transition: height 0.3s;
    padding: 0;
    margin: 0;
    line-height: 1.5;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
    text-align: left;
    cursor: text;
    transition: all 0.3s;
    line-height: 1.5rem;
}

.textarea:focus {
    outline: none;
}

</style>