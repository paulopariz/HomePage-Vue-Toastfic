<script setup lang="ts">
import { useRoute } from "vue-router";

const topics = ref<string[]>([]);
const topicSelected = ref("");
const showScrollToTop = ref(false);

const route = useRoute();

function scrollTo(id: string) {
  topicSelected.value = id;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
  showScrollToTop.value = window.scrollY > 300;
}

onMounted(() => {
  updateTopics();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  topics.value = [];
});

watch(
  () => route.path,
  () => {
    updateTopics();
  }
);

function updateTopics() {
  const allIds = Array.from(document.querySelectorAll("h2[id], h3[id]")).map((el) => (el as HTMLElement).id);
  topics.value = allIds;
}
</script>
<template>
  <div v-if="topics.length > 0" class="flex flex-col pl-3">
    <h1 class="mb-2.5 text-sm font-semibold">Nesta página:</h1>
    <nav class="border-l pl-3">
      <ul class="flex flex-col gap-2">
        <li v-for="topic in topics" :key="topic">
          <p
            class="cursor-pointer text-sm text-muted-foreground hover:underline"
            :class="{ '!text-green': topicSelected === topic }"
            @click.prevent="scrollTo(topic)"
          >
            {{ topic }}
          </p>
        </li>
      </ul>
    </nav>

    <p
      v-if="showScrollToTop"
      class="ml-3 mt-2.5 flex cursor-pointer items-center gap-2 text-xs font-semibold"
      @click="scrollToTop"
    >
      {{ $t("additionals.back-to-top") }}

      <PhosphorIconArrowUp weight="bold" />
    </p>
  </div>
</template>
