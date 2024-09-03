<script setup lang="ts">
import { Check } from 'lucide-vue-next';
import { SelectItem, SelectItemIndicator, type SelectItemProps, SelectItemText, useForwardProps } from 'radix-vue';
import { type HTMLAttributes } from 'vue';
import { cn } from '~/lib/class';

const props = defineProps<SelectItemProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectItem
    v-bind="forwardedProps"
    data-cy="select-item"
    :class="
      cn(
        'relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      )
    "
  >
    <span class="absolute right-2 flex size-3.5 items-center justify-center">
      <SelectItemIndicator>
        <Check class="size-4" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
