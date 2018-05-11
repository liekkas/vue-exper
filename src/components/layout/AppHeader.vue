<template>
  <div class="app-header">
    <div class="header-left app-center" @click="$router.push('/')">
      <img src="/static/logo.png">
      <div>{{$t('projectName')}}</div>
    </div>
    
    <div class="header-menu">
      <div class="header-menu-item" 
           :class="{'header-menu-item-selected': activeMenu === item.name}"
           v-for="item in appMenus" :key="item.name" @click="letsgo(item)"
           v-if="isAdmin || authMenus.indexOf(item.name) > -1">
        <Icon :type="item.icon"></Icon>
        {{ item.title }}
      </div>
    </div>

    <div class="header-right app-center">
      <Poptip trigger="hover">
        <div class="dropdown-cell app-center">
          <img src="/static/profile.svg">&nbsp;
            <span style="font-size: 15px;">{{personName}}&nbsp;</span>
          <Icon type="ios-arrow-down"></Icon>
        </div>
        <div class="poptip-content" slot="content">
          <div class="poptip-content-item" @click="logout">
            <Icon type="log-out"></Icon>&nbsp;退出
          </div>
          <div class="poptip-content-item">
            <Icon type="log-out"></Icon>&nbsp;退出2
          </div>
        </div>
      </Poptip>

      <Poptip trigger="hover">
        <div class="dropdown-cell app-center">
          <span style="font-size: 15px;">工单&nbsp;</span>
          <Icon type="ios-arrow-down"></Icon>
        </div>
        <div class="poptip-content" slot="content">
          <div class="poptip-content-item">
            <Icon type="log-out"></Icon>&nbsp;我的工单
          </div>
          <div class="poptip-content-item">
            <Icon type="log-out"></Icon>&nbsp;提交工单
          </div>
        </div>
      </Poptip>

      
      <div class="header-toolbar app-center">
        <div class="header-icon app-center" 
             :class="{'header-icon-selected': showType === 'msg'}"
             @click="toggleSlidePanel('msg')">
          <Badge count="12">
            <Icon type="ios-bell" size="24"></Icon>
          </Badge>
        </div>
        <div class="header-icon app-center" 
             :class="{'header-icon-selected': showType === 'history'}"
             @click="toggleSlidePanel('history')">
          <Icon type="android-time" size="22"></Icon>
        </div>
        <div class="header-icon app-center" 
             :class="{'header-icon-selected': showType === 'help'}"
             @click="toggleSlidePanel('help')">
          <Icon type="help-circled" size="22"></Icon>
        </div>
        
      </div>
    </div>
    <!-- <Button @click="logout">退出</Button> -->
  </div>
</template>

<script>
export default {
  props: ['showType'],
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
      console.log(this.$route.path.split('/')[1]);
      return this.$route.path.split('/')[1]
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    toggleSlidePanel(v) {
      this.$emit('show-panel', v)
    },
    letsgo(v) {
      console.log('v is', v);
      this.$router.push({name: v.name})
    }
  },
}
</script>

<style lang="less">
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
    user-select: none;
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

  .ivu-poptip-inner {
    background-color: #000000;
    position: absolute;
    top: 0;
  }

  .ivu-poptip-arrow {
    display: none;
  }

  .poptip-content {
    color: #bbb;
    font-weight: 600;
    &-item {
      padding: 8px;
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
      background-color: fade(@primary-color,90%);
      border-radius: 30px;
    }
    &-selected {
      background-color: @primary-color;
      border-radius: 30px;
    }
  }
</style>

