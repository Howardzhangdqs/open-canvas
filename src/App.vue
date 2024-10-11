<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import Button from "./components/Button.vue";
import Slide from "./components/Slide.vue";
import Dialoge from "./components/Dialoge.vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

const SlideData = reactive([
  {
    icon: "material-symbols:work-outline",
    text: i18n.t("ui.slide_text_complexity.work"),
  },
  {
    icon: "mdi:academic-cap",
    text: i18n.t("ui.slide_text_complexity.academic"),
  },
  {
    icon: "mingcute:school-line",
    text: i18n.t("ui.slide_text_complexity.high_school"),
  },
  {
    icon: "mingcute:school-line",
    text: i18n.t("ui.slide_text_complexity.middle_school"),
  },
  {
    icon: "mingcute:school-line",
    text: i18n.t("ui.slide_text_complexity.elementary_school"),
  },
  {
    icon: "mdi:baby-face-outline",
    text: i18n.t("ui.slide_text_complexity.pre_school"),
  },
]);

const dialoge = ref();

watch(dialoge, () => {
  console.log(dialoge.value);
});

</script>

<template>
  <div style="display: flex; gap: 2rem; 
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
">
    <Button />
    <Slide :options="SlideData" />
    <Dialoge v-model="dialoge"/>
  </div>
</template>

<style scoped></style>
