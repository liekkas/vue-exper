<template>
  <div class="hyz-module">
    <div class="hyz-module-side">
      <AppMenu :value="menus" :activeMenu="activeMenu"  :module="module"></AppMenu>
    </div>
    <div class="hyz-module-container">
      <div class="hyz-module-breadmenu" v-if="route !== '监控系统 > 概况' && route !== '监控系统 > 资源管理 > 呈现配置'">
         <Icon type="leaf"></Icon>&nbsp;{{route}}
      </div>
      <div class="hyz-module-breadmenu2" v-else>
        <Icon type="leaf"></Icon>&nbsp;{{route}}
      </div>
      <transition name="fade" mode="out-in">
        <router-view :key="key" class="hyz-module-content"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  import AppMenu from '@/components/layout/AppMenu';
  export default {
    components: {
      AppMenu,
    },

    data () {
      return {
        route: this.$route.name,
        activeMenu: this.$route.path.split('/')[2],
        isForward:true,
        module: 'alarm'
      }
    },
    computed: {
      key() {
        return this.$route.name !== undefined
          ? this.$route.name + +new Date()
          : this.$route + +new Date()
      },
      menus() {
        return this.$store.state.alarm.menus
      },
    },
    created() {
    },
    methods: {
      onMenuChanged: function (v) {
        this.$router.push('/alarm/'+v)
      },
    }
  }
</script>
