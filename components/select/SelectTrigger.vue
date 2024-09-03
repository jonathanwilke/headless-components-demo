<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next';
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue';
import { type HTMLAttributes } from 'vue';
import { cn } from '~/lib/class';

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex h-10 w-full bg-white items-center justify-between rounded-md border-2 border-border px-3 py-2 text-sm ring-offset-background focus:border-ring placeholder:text-muted-foreground focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        props.class,
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="size-4 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
