export function useNpmDownloads() {
  async function fetchNpmDownloads(days: number) {
    try {
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(endDate.getDate() - days);

      const endStr = endDate.toISOString().split("T")[0];
      const startStr = startDate.toISOString().split("T")[0];

      const url = `https://api.npmjs.org/downloads/range/${startStr}:${endStr}/vue-toastfic`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.downloads) {
        return data.downloads.map((item: { day: string; downloads: number }) => ({
          day: new Date(item.day).toLocaleDateString(),
          downloads: item.downloads,
        }));
      }
    } catch (error) {
      console.error("NPM downloads:", error);
    }
    return [];
  }

  return {
    fetchNpmDownloads,
  };
}
