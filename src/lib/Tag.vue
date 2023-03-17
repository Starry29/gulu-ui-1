<template>
  <span class="g-tag" :class="tagClasses" @click="handleClick">
    <span class="content">
      <slot></slot>
    </span>
    <span class="g-tag-icon" v-if="closable" @click.stop="handleClose">
      <svg>
        <use xlink:href="#icon-close"></use>
      </svg>
    </span>
  </span>
</template>

<script lang='ts' setup>
import { computed } from "vue";

const props = defineProps({
  type: String,
  effect: String,
  size: String,
  closable: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
});
const emits = defineEmits(["close", "click"]);
const tagClasses = computed(() => {
  return {
    [`g-tag--${props.type}`]: props.type,
    [`g-tag--${props.size}`]: props.size,
    [`g-tag--${props.effect}`]: props.effect,
    [`is-round`]: props.round,
    [`is-closable`]: props.closable,
  };
});

function handleClose(event: MouseEvent) {
  emits("close", event);
}

function handleClick(event: MouseEvent) {
  emits("click", event);
}
</script>

<style lang='scss' scoped>
.g-tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  padding: 0 9px;
  margin: 10px;
  font-size: 12px;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  line-height: 1;
  background-color: #f4f4f5;
  color: #545454;
  border-color: #d9d9d9;

  .g-tag-icon {
    svg {
      fill: #909399;

      &:hover {
        background-color: #909399;
        fill: #fff;
      }
    }
  }

  &.is-round {
    border-radius: 9999px;
  }

  &.is-closable {
    padding-right: 5px;
  }

  // 不同颜色
  &.g-tag--processing {
    background-color: #e6f4ff;
    color: #1677ff;
    border-color: #91caff;

    .g-tag-icon {
      svg {
        fill: #409eff;

        &:hover {
          background-color: #409eff;
          fill: #fff;
        }
      }
    }
  }

  &.g-tag--success {
    background-color: #f6ffed;
    color: #52c41a;
    border-color: #b7eb8f;

    .g-tag-icon {
      svg {
        fill: #52c41a;

        &:hover {
          background-color: #52c41a;
          fill: #fff;
        }
      }
    }
  }

  &.g-tag--warning {
    background-color: #fffbe6;
    color: #fbb72e;
    border-color: #ffe58f;

    .g-tag-icon {
      svg {
        fill: #fbb72e;

        &:hover {
          background-color: #fbb72e;
          fill: #fff;
        }
      }
    }
  }

  &.g-tag--danger {
    background-color: #fff2f0;
    color: #ff5f61;
    border-color: #fde2e2;

    .g-tag-icon {
      svg {
        fill: #ff5f61;

        &:hover {
          background-color: #ff5f61;
          fill: #fff;
        }
      }
    }
  }

  // 不同颜色深浅
  &.g-tag--dark {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &.g-tag--success {
      background-color: #87d068;
      border-color: #87d068;
    }

    &.g-tag--processing {
      background-color: #108ee9;
      border-color: #108ee9;
    }

    &.g-tag--warning {
      background-color: #f18724;
      border-color: #f18724;
    }

    &.g-tag--danger {
      background-color: #f50;
      border-color: #f50;
    }
  }

  &.g-tag--plain {
    background-color: #fff;
    border-color: #c8c9cc;

    &.g-tag--success {
      border-color: #b3e19d;
    }

    &.g-tag--processing {
      border-color: #a0cfff;
    }

    &.g-tag--warning {
      border-color: #f3d19e;
    }

    &.g-tag--danger {
      border-color: #fab6b6;
    }
  }

  // 不同尺寸
  &.g-tag--large {
    padding: 0 11px;
    height: 32px;
    font-size: 16px;
    margin: 10px;
  }

  &.g-tag--small {
    margin: 10px;
    padding: 0 7px;
    height: 20px;
    font-size: 12px;
  }

  .g-tag-icon {
    svg {
      width: 16px;
      height: 16px;
      margin-left: 6px;
      cursor: pointer;
      vertical-align: middle;
      border-radius: 50%;
    }
  }
}
</style>

