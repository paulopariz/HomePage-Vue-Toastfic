interface NpmVersion {
  version: string;
}

interface NpmInfo {
  last_version: string;
  versions: NpmVersion[];
}

interface IResponse {
  "dist-tags": {
    latest: string;
  };
  versions: Record<string, NpmVersion>;
}

export function useNpmInfo() {
  const npmInfo = ref<NpmInfo | null>(null);

  async function fetchNpmInfo() {
    try {
      const response = (await $fetch("https://registry.npmjs.org/vue-toastfic")) as IResponse;
      const versions = Object.values(response.versions);

      npmInfo.value = {
        last_version: response["dist-tags"].latest,
        versions: versions,
      };
    } catch (error) {
      console.error("NPM:", error);
    }
  }

  onMounted(async () => {
    await fetchNpmInfo();
  });

  return {
    npmInfo,
  };
}
