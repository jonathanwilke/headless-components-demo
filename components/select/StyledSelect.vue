<script setup lang="ts">
defineProps<{
  options?:
    | {
        label: string;
        value: string;
      }[]
    | string[];
  placeholder?: string;
}>();
</script>

<template>
  <SelectRoot>
    <SelectTrigger>
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem
          v-for="option in options"
          :key="typeof option === 'string' ? option : option.value"
          :value="typeof option === 'string' ? option : option.value"
        >
          {{ typeof option === 'string' ? option : option.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </SelectRoot>
</template>
