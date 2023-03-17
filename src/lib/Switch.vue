<template>
  <div class="g-switch" :class="switchBoxClasses" @click="toggle">
    <span class="g-switch-label">{{ Text }}</span>
    <button class="g-switch-btn">
    <span></span>
    </button>
  </div>
</template>
<script lang="ts" setup>
import {computed, defineEmits, ref, watchEffect} from 'vue';

const emits = defineEmits(['update:modelValue', 'change']);
const props = defineProps({
  modelValue: [Boolean, String, Number],
  Text: {type: String, default: ''},
  disabled: {type: Boolean, default: false},
  size: {type: String, values: ['large', 'small'], default: ''},
  activeValue: {type: [Boolean, String, Number], default: true},
});
const switchActive = ref();
watchEffect(() => {
    switchActive.value = props.modelValue === props.activeValue;
});
const switchBoxClasses = computed(() => {
  return {
    'is-disabled': props.disabled,
    'is-checked': switchActive.value,
    [`g-switch-${props.size}`]: props.size
  };
});
const toggle = () => {
  if (props.disabled) return;
  switchActive.value = !switchActive.value;
};
</script>

<style lang="scss">
$dh: 32px; // 默认情况高度
$dLineHeight: 26px; //行高
$dhInside: $dLineHeight - 4px;

$lh: 40px; // 大尺寸
$lLineHeight: 32px; //大尺寸下行高
$lhInside: $lLineHeight - 4px;


$sh: 24px; // 小尺寸
$sLineHeight: 20px; //小尺寸下行高
$shInside: $sLineHeight - 4px;

.g-switch {
  position: relative;
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  height: $dh;
  // 是否禁用
  &.is-disabled {
    opacity: 0.6;
    cursor: not-allowed;

    .g-switch-btn {
      cursor: not-allowed;

    }
  }

  // 是否选中
  &.is-checked {
    .g-switch-label {
      color: #409eff;
    }

    .g-switch-btn {
      background: #409eff;

      span {
        left: calc(100% - #{$dhInside} - 2px);
      }
    }

    &.g-switch-large .g-switch-btn span {
      left: calc(100% - #{$lhInside} - 2px);
    }

    &.g-switch-small .g-switch-btn span {
      left: calc(100% - #{$shInside} - 2px);
    }

  }

  //   尺寸大小
  &.g-switch-large {
    height: $lh;

    .g-switch-btn {
      height: $lLineHeight;
      width: $lLineHeight*2;
      border-radius: calc($lLineHeight / 2);

      span {
        width: $lhInside;
        height: $lhInside;

      }
    }
  }

  &.g-switch-small {
    font-size: 12px;
    line-height: 16px;
    height: $sh;

    .g-switch-btn {
      height: $sLineHeight;
      width: $sLineHeight*2;
      border-radius: calc($sLineHeight / 2);

      span {
        width: $shInside;
        height: $shInside;
      }
    }
  }
}

.g-switch-label {
  transition: all 0.2s;
  display: inline-block;
  font-weight: 500;
  vertical-align: middle;
  color: #303133;
  padding-left: 20px;
  font-size: 15px;
}

.g-switch-btn {
  height: $dLineHeight;
  width: $dLineHeight*2;
  border: none;
  background: #dcdfe6;
  border-radius: calc($dLineHeight / 2);
  position: relative;
  cursor: pointer;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $dhInside;
    width: $dhInside;
    background: white;
    border-radius: 50%;
    transition: left 250ms;
  }

  &:focus {
    outline: none;
  }
}
</style>