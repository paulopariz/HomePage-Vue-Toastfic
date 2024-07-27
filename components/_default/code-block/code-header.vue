<template>
  <TabsList class="h-12 w-full gap-3 rounded-none border-b bg-transparent px-2">
    <TabsTrigger value="default" class="teste w-min cursor-text items-center gap-2 rounded-[6px]">
      <slot />
    </TabsTrigger>

    <Button variant="ghost" class="ml-auto size-8 rounded-[6px] p-0">
      <PhosphorIconCopySimple size="18" weight="fill" color="var(--icon)" />
    </Button>
  </TabsList>
</template>
