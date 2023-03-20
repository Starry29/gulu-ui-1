<template>
  <button class="g-button" :class="classes" :disabled="disabled" @click="$emit('click', $event)">
    <span v-if="loading" class="g-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts" setup="props">
import { computed } from "vue";
const props = defineProps<{
  theme?: 'button' | 'text' | 'link';
  size?: 'normal' | 'big' | 'small';
  level?: 'normal' | 'main' | 'danger';
  disabled?: boolean;
  loading?: boolean;
}>();
const { theme, size, level } = props;

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
const classes = computed(() => {
  return {
    [`g-theme-${theme}`]: theme,
    [`g-size-${size}`]: size,
    [`g-level-${level}`]: level,
  };
});
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;


.g-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  margin: 8px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  &+& {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: #40a9ff;
    border-color: #40a9ff;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.g-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      color: lighten(#40a9ff, 10%);
    }
  }

  &.g-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.g-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.g-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  // button的不同level下的样式
  &.g-theme-button {
    &.g-level-main {
      background: #40a9ff;
      color: white;
      border-color: #40a9ff;

      &:hover,
      &:focus {
        background: darken(#40a9ff, 10%);
        border-color: darken(#40a9ff, 10%);
      }
    }

    &.g-level-danger {
      background: red;
      border-color: red;
      color: white;

      &:hover,
      &:focus {
        background: darken(red, 10%);
        border-color: darken(red, 10%);
      }
    }
  }

  &.g-theme-link {
    &.g-level-main {
      color: #40a9ff;

      &:hover,
      &:focus {
        color: darken(#40a9ff, 10%);
      }
    }

    &.g-level-danger {
      color: red;

      &:hover,
      &:focus {
        color: darken(red, 10%);
      }
    }
  }

  &.g-theme-text {
    &.g-level-main {
      color: #40a9ff;

      &:hover,
      &:focus {
        color: darken(#40a9ff, 10%);
      }
    }

    &.g-level-danger {
      color: red;

      &:hover,
      &:focus {
        color: darken(red, 10%);
      }
    }
  }

  //  按钮禁用
  &.g-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: grey;

      &:hover {
        border-color: grey;
      }
    }
  }

  &.g-theme-link, &.g-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: grey;
    }
  }

  > .g-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: #40a9ff #40a9ff #40a9ff transparent;
    border-style: solid;
    border-width: 2px;
    animation: g-spin 1s infinite linear;
  }
}

@keyframes g-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>
