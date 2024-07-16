<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGitHubRepoInfo } from "~/composables/apiGithub";

const { repoInfo } = useGitHubRepoInfo();

onMounted(() => {
  setTimeout(() => {
    console.log("repoInfo", repoInfo.value);
  }, 1000);
});
</script>

<template>
  <div class="mt-56 grid gap-5">
    <h1 class="flex items-center gap-2 text-3xl font-semibold">
      <PhosphorIconHash color="var(--green)" />
      Github
    </h1>

    <p class="max-w-4xl leading-7 tracking-wider text-muted-foreground">
      Repositório oficial do vue-toastfic. Aqui você pode acompanhar as atualizações da biblioteca, acessar a
      documentação, relatar bugs, sugerir melhorias e muito mais.
    </p>

    <section class="mt-10 grid w-full grid-cols-3 items-start justify-between divide-x rounded-md">
      <header class="flex items-center gap-5 rounded-md py-5 pl-6 pr-10">
        <div class="grid gap-4">
          <div class="flex gap-8">
            <p class="flex items-center gap-2 text-sm">
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
                class="cursor-pointer transition-all hover:underline"
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
            <p class="text-6xl font-black -tracking-wide">
              vue-<br />
              toastfic
            </p>
          </NuxtLink>
        </div>
      </header>

      <div class="flex h-full items-center justify-center gap-8 p-10 text-7xl font-black">
        {{ repoInfo?.stargazers_count }} <PhosphorIconStar weight="fill" color="var(--icon)" />
      </div>
      <div class="flex h-full items-center justify-center gap-8 p-10 text-7xl font-black">
        {{ repoInfo?.forks_count }} <PhosphorIconGitFork weight="fill" color="var(--icon)" />
      </div>
    </section>
  </div>
</template>
