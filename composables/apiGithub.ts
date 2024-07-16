interface IGitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
  body: string;
}

interface IGitHubRepoOwner {
  login: string;
  avatar_url: string;
}

interface IGitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  owner: IGitHubRepoOwner;
  created_at: string;
  releases: IGitHubRelease[];
}

export function useGitHubRepoInfo() {
  const repoInfo = ref<IGitHubRepo | null>(null);

  async function fetchInfos() {
    try {
      const repoUrl = "https://api.github.com/repos/paulopariz/ChatSK-Client";
      const releasesUrl = `${repoUrl}/releases`;

      const [repoResponse, releasesResponse] = await Promise.all([fetch(repoUrl), fetch(releasesUrl)]);

      if (!repoResponse.ok) throw new Error(`GitHub repo info: ${repoResponse.statusText}`);
      if (!releasesResponse.ok) throw new Error(`GitHub releases: ${releasesResponse.statusText}`);

      const { name, description, html_url, stargazers_count, watchers_count, forks_count, created_at, owner } =
        (await repoResponse.json()) as IGitHubRepo;

      const releasesData = (await releasesResponse.json()) as IGitHubRelease[];

      repoInfo.value = {
        name,
        description,
        html_url,
        stargazers_count,
        watchers_count,
        forks_count,
        created_at,

        owner: {
          login: owner.login,
          avatar_url: owner.avatar_url,
        },

        releases: releasesData.map(({ tag_name, name, published_at, html_url, body }: IGitHubRelease) => ({
          tag_name,
          name,
          published_at,
          html_url,
          body,
        })),
      };
    } catch (error) {
      console.error("Failed to fetch GitHub:", error);
    }
  }

  onMounted(async () => {
    await fetchInfos();
  });

  return {
    repoInfo,
  };
}
