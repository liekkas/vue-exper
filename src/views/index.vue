<template>
  <div>
    <app-header @show-panel="onShowPanel"></app-header>
    <transition>
      <router-view :key="key" class="app-container"></router-view>
    </transition>
    <transition name="showSlide"
                enter-active-class="animated fadeInRight"
                leave-active-class="animated fadeOutRight">
      <slide-panel v-if="showType === 'msg'" @hide-panel="showType = ''"
                   title="消息中心">
      </slide-panel>
      <slide-panel v-else-if="showType === 'history'" @hide-panel="showType = ''"
                   title="最近操作">
      </slide-panel>
      <slide-panel v-else-if="showType === 'help'" @hide-panel="showType = ''"
                   title="帮助中心">
      </slide-panel>
    </transition>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader';
import SlidePanel from './common/SlidePanel';
export default {
  components: {AppHeader, SlidePanel},
  data() {
    return {
      showType: ''
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date()
    }
  },
  methods: {
    onShowPanel(v) {
      this.showType = this.showType == v ? '' : v
      console.log('v is ', v);
    }
  },
}
</script>

<style lang="less" scoped>
</style>

