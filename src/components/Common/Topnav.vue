<template>
<div class="topnav">
  <router-link to="/" class="logo">
    <svg class="icon">
      <use xlink:href="#icon-windmill"></use>
    </svg>
    <span class="svgtext">Windmill UI</span>
  </router-link>
  <ul class="menu">
    <li>
      <router-link to="/doc">文档</router-link>
    </li>
  </ul>
  <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
    <use xlink:href="#icon-menu"></use>
  </svg>
</div>
</template>

<script lang="ts">
import {
  inject,
  onMounted,
  ref,
  Ref
} from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    onMounted(() => {
      const screenWidth = ref(document.documentElement.clientWidth);
      window.onresize = () => {
        screenWidth.value = document.documentElement.clientWidth;
        menuVisible.value = screenWidth.value > 500;
      };
    });
    return {
      toggleMenu
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #007974;


.topnav {
  color: $color;
  display: flex;
  padding: 12px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  >.logo {
    max-width: 11em;
    margin-right: auto;
    display: flex;
    align-items: center;

    > .svgtext {
     padding: 8px 16px;
     font-size: 18px;
     
    }

    &:hover{
      text-decoration: none;
    }

    >svg {
      width: 32px;
      height: 32px;
    }
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
    }
  }

  >.toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }

    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>
