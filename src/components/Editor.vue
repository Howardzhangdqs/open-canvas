<template>
    <div>
        <div :id="`editor-${uid}`"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Vditor from "vditor";

import { useI18n } from "vue-i18n";

const i18n = useI18n();

const get_uid = () => {
    return Math.random().toString(36).substring(2);
};

const uid = get_uid();

const vditor = ref<Vditor>();

onMounted(() => {
    vditor.value = new Vditor(`editor-${uid}`, {
        // height: 300,
        width: "calc(var(--width) * 0.68)",
        toolbarConfig: {
            hide: false,
            pin: false,
        },
        toolbar: [
            // "emoji",
            // "headings",
            // "bold",
            // "italic",
            // "strike",
            // "|",
            // "line",
            // "quote",
            // "list",
            // "ordered-list",
            // "check", "outdent", "indent",
            // "code",
            // "inline-code",
            // "insert-after",
            // "insert-before", "undo",
            // "redo",
            // "upload",
            // "link",
            // "table",
            // "record",
            // "edit-mode",
            // "both",
            // "preview",
            // "outline",
            // "code-theme",
            // "content-theme",
            // "export",
            "br",
        ],
        cache: {
            enable: false,
        },
        mode: "ir",
        placeholder: i18n.t("ui.editor.placeholder"),
    });
});
</script>

<style scoped></style>
