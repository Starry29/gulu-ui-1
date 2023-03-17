<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <div class="sideBarContainer">
        <aside v-if="menuVisible">
          <section class="sidebar-group">
            <p class="sidebar-group-title">文档</p>
            <ol>
              <li>
                <router-link to="/doc/intro">介绍</router-link>
              </li>
              <li>
                <router-link to="/doc/install">安装</router-link>
              </li>
              <li>
                <router-link to="/doc/get-started">开始使用</router-link>
              </li>
            </ol>
          </section>
          <section class="sidebar-group">
            <p class="sidebar-group-title">Basic 基础组件</p>
            <ol>
              <li>
                <router-link to="/doc/button">Button 组件</router-link>
              </li>
            </ol>
          </section>
          <!--          -->

          <section class="sidebar-group">
            <p class="sidebar-group-title">Form表单组件</p>
            <ol>
              <li>
                <router-link to="/doc/input">Input 输入框</router-link>
              </li>
              <li>
                <router-link to="/doc/switch">Switch 开关</router-link>
              </li>
            </ol>
          </section>
          <section class="sidebar-group">
            <p class="sidebar-group-title">Data数据展示</p>
            <ol>
              <li>
                <router-link to="/doc/carousel">Carousel 走马灯</router-link>
              </li>
              <li>
                <router-link to="/doc/tag">Tag 标签</router-link>
              </li>
            </ol>
          </section>
          <section class="sidebar-group">
            <p class="sidebar-group-title">Navigation 导航</p>
            <ol>
              <li>
                <router-link to="/doc/tabs">Tabs 标签页</router-link>
              </li>
            </ol>
          </section>
          <!--          -->
          <section class="sidebar-group">
            <p class="sidebar-group-title">Feedback 反馈组件</p>
            <ol>
              <li>
                <router-link to="/doc/dialog">Dialog 对话框</router-link>
              </li>
              <li>
                <router-link to="/doc/popover">Popover 弹出框</router-link>
              </li>
            </ol>
          </section>
          <!--          -->
          <div class="vertical-scroll">
            <div class="rail"></div>
          </div>
        </aside>
      </div>
      <main class="doc-content">
        <router-view />
      </main>
    </div>
  </div>
</template>


<script lang="ts">
import Topnav from "../components/Common/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); //<>就是在标记类型
    return { menuVisible }; //无论是变量还是函数，都需要返回，才能够被外部的template用到
  },
};
</script>

<style lang="scss" scoped>
main {
  overflow: auto;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 40px;
    padding-left: 250px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  .doc-content {
    flex-grow: 1;
    padding: 50px 80px;
  }
}

aside {
  background:#edfafc;
  position: fixed;
  width: 280px;
  bottom: 0;
  left: 0;
  height: calc(100vh - 67px);
  z-index: 10;
  padding: 8px 50px;
  overflow-y: scroll;
  overscroll-behavior: contain;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #fff;
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: whitesmoke;
    opacity: 0.2;
  }
  &:hover {
    &::-webkit-scrollbar {
      display: block;
    }
  }

  .sidebar-group {
    padding-top: 24px;

    .sidebar-group-title {
      font-weight: 700;
      font-size: 1.15rem;
      margin-bottom: 8px;
      line-height: 24px;
    }

    ol {
      > li {
        position: relative;

        > a {
          padding: 8px 12px;
          display: block;
          text-decoration: none;
          border-radius: 8px;
          color: #606266;
          font-weight: 500;
          transition: color 0.3s;
          font-family: "PingFang SC", sans-serif;
          font-size: 1rem;

          &:hover {
            color: #1890ff;
          }

          &:after {
            content: "";
            top: 0;
            right: 0;
            height: 100%;
            position: absolute;
            bottom: 0;
            opacity: 0;
            border-right: 3px solid #1890ff;
            transform: scaleY(0.0001);
            transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
              opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          &.router-link-active {
            color: #72c2f2;
            background-color: #fff;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>