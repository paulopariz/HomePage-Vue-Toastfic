<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Header, HeaderDescription, HeaderTitle } from "@/components/_default/header";

import { useGitHubRepoInfo } from "~/composables/apiGithub";

const { repoInfo } = useGitHubRepoInfo();

onMounted(() => {
  setTimeout(() => {
    console.log("repoInfo", repoInfo.value);
  }, 1000);
});
</script>

<template>
  <div class="grid gap-5">
    <Header>
      <HeaderTitle class="flex items-center gap-2"> Github </HeaderTitle>
      <HeaderDescription>
        Repositório oficial do vue-toastfic. Aqui você pode acompanhar as atualizações da biblioteca, acessar a
        documentação, relatar bugs, sugerir melhorias e muito mais.
      </HeaderDescription>
    </Header>

    <section class="mt-10 grid w-full grid-cols-3 items-start justify-between divide-x rounded-md">
      <div class="flex items-center gap-5 rounded-md py-5 pl-6 pr-10 max-md:pl-0">
        <div class="grid gap-4">
          <div class="flex gap-8 max-lg:grid max-lg:gap-4">
            <p class="flex items-center gap-2 text-sm text-muted-foreground max-md:text-xs">
              <PhosphorIconCalendar size="20" color="var(--icon)" weight="fill" />
              {{ repoInfo?.created_at ? $formatDate(repoInfo?.created_at) : "" }}
            </p>
            <div class="flex items-center gap-2">
              <Avatar class="size-5">
                <AvatarImage :src="repoInfo?.owner.avatar_url ?? ''" :alt="repoInfo?.owner.login ?? 'Avatar'" />
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
              <NuxtLink
                target="_blank"
                href="https://github.com/paulopariz"
                class="cursor-pointer text-muted-foreground transition-all hover:underline max-lg:text-xs"
              >
                {{ repoInfo?.owner.login }}
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            target="_blank"
            href="https://github.com/paulopariz/vue-toastfic"
            class="flex w-min cursor-pointer items-center gap-2 text-lg font-semibold transition-all hover:underline"
          >
            <p class="text-6xl font-black -tracking-wide max-lg:text-2xl">
              vue-<br />
              toastfic
            </p>
          </NuxtLink>
        </div>
      </div>

      <div
        class="flex h-full items-center justify-center gap-8 p-10 text-7xl font-black max-md:grid max-md:px-0 max-md:text-4xl"
      >
        <span class="max-md:ml-1">
          {{ repoInfo?.stargazers_count }}
        </span>
        <PhosphorIconStar weight="fill" color="var(--icon)" />
      </div>
      <div
        class="flex h-full items-center justify-center gap-8 p-10 text-7xl font-black max-md:grid max-md:px-0 max-md:text-4xl"
      >
        <span class="max-md:ml-1">
          {{ repoInfo?.forks_count }}
        </span>
        <PhosphorIconGitFork weight="fill" color="var(--icon)" />
      </div>
    </section>
  </div>
</template>
