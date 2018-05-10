<template>
  <div class="app-header">
    <div class="header-left app-center" @click="$router.push('/')">
      <img src="/static/logo.png">
      <div>{{$t('projectName')}}</div>
    </div>
    
    <div class="header-menu">
      <div class="header-menu-item" 
           :class="{'header-menu-item-selected': activeMenu === item.name}"
           v-for="item in appMenus" :key="item.name" 
           v-if="isAdmin || authMenus.indexOf(item.name) > -1">
        <Icon :type="item.icon"></Icon>
        {{ item.title }}
      </div>
    </div>

    <div class="header-right app-center">
      <Poptip trigger="hover">
        <div class="dropdown-cell app-center">
          <img src="/static/profile.svg">&nbsp;
          <Icon type="ios-arrow-down"></Icon>
        </div>
        <div class="poptip-content" slot="content">
          <div class="poptip-content-item" @click="logout">
            <Icon type="log-out"></Icon>退出
          </div>
          <div class="poptip-content-item">
            <Icon type="log-out"></Icon>退出2
          </div>
        </div>
      </Poptip>

      
      <div class="header-toolbar app-center">
        <div class="header-icon app-center" @click="$emit('show-panel', 'msg')">
          <Badge count="12">
            <Icon type="ios-bell" size="24"></Icon>
          </Badge>
        </div>
        <div class="header-icon app-center" @click="$emit('show-panel', 'history')">
          <Icon type="android-time" size="22"></Icon>
        </div>
        <div class="header-icon app-center" @click="$emit('show-panel', 'help')">
          <!-- <Badge count="0"> -->
            <Icon type="help-circled" size="22"></Icon>
          <!-- </Badge> -->
        </div>
        
      </div>
    </div>
    <!-- <Button @click="logout">退出</Button> -->
  </div>
</template>

<script>
export default {
  computed: {
    appMenus() {
      return this.$store.getters.appMenus
    },
    authMenus() {
      return this.$store.getters.authMenus
    },
    isAdmin() {
      return this.$store.getters.isAdmin
    },
    personName() {
      return this.$store.getters.user ? this.$store.getters.user.personName : ''
    },
    activeMenu() {
      return this.$route.name
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>

<style lang="less" scoped>
  @import '~@/styles/theme';
  .header-left {
    cursor: pointer;
    img {
      height: 36px;
    }
    div {
      font-size: 18px;
      font-style: italic;
      margin: 0 4px;
    }
    flex-shrink: 0; //禁止压缩
  }

  .header-menu {
    height: 40px;
    margin: 10px 0 10px 16px;
    padding: 10px 24px;
    font-size: 15px;
    width: 100%;
    // background-color: azure;
    border-left: 1px solid #000;     
    border-right: 1px solid #000; 
    display: flex;
    align-items: baseline;
    &-item {
      margin: 0 12px;
      &:hover {
        cursor: pointer;
        color: fade(@primary-color,90%);
      }
    }
    &-item-selected {
      color: @primary-color;
    }
  }

  .header-right {
    font-size: 18px;
    flex-shrink: 0;
  }

  .dropdown-cell {
    padding: 0 12px;
    height: @header-height;
    &:hover {
      background-color: @primary-color;
    }
  }

  .header-toolbar {
    // height: 40px;
    // margin: 10px 16px 10px 0;
    // margin-right: 16px;
    color: #ddd;
    padding: 10px 14px;
    border-left: 1px solid #000;    
    // background-color: aquamarine; 
  }

  .poptip-content {
    color: @text-color;
    
    &-item {
      padding: 4px 0;
      &:hover {
        cursor: pointer;
        color: @primary-color;
      }
    }
  }

  .header-icon {
    width: 30px;
    height: 30px;
    margin: 0 4px;
    &:hover {
      cursor: pointer;
      background-color: @primary-color;
      border-radius: 30px;
    }
  }
</style>

