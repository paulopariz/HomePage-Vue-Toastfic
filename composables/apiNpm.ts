import { ref, onMounted } from "vue";

interface NpmInfo {
  last_version: string;
}

interface IResponse {
  "dist-tags": {
    latest: string;
  };
}

export function useNpmInfo() {
  const npmInfo = ref<NpmInfo | null>(null);

  async function fetchNpmInfo() {
    try {
      const { "dist-tags": tags } = (await $fetch("https://registry.npmjs.org/vue-toastfic")) as IResponse;

      npmInfo.value = {
        last_version: tags.latest,
      };
    } catch (error) {
      console.error("NPM:", error);
    }
  }

  onMounted(async () => {
    await fetchNpmInfo();
    console.log(npmInfo.value);
  });

  return {
    npmInfo,
  };
}
