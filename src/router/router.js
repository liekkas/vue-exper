//需要权限验证的路由
export const appRouter = {
  path: '/',
  name: 'root',
  component: () => import('../views'),
  redirect: '/home',
  children: [
    {
      path: 'home',
      name: 'home',
      icon: 'home',
      title: '首页',
      component: () => import('../views/home'),
    },
    {
      path: 'alarm',
      name: 'alarm',
      icon: 'ios-bell',
      title: '告警管理',
      children: [
        {
          path: 'alarmList',
          title: '告警流水',
          component: () => import('../views/alarm/AlarmList.vue')
        }
      ]
    },
    {
      path: 'form',
      name: 'form',
      icon: 'ios-list',
      title: '表单管理',
      children: [
        {
          path: 'alarmList',
          title: '告警流水',
          component: () => import('../views/alarm/AlarmList.vue')
        }
      ]
    },
  ]
}

//不需要权限验证的通用路由
export const commonRouters = [
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: () => import('../views/login')
  },
  {
    path: '/403',
    name: 'error-403',
    title: '403权限不足',
    component: () => import('../views/error/403.vue')
  },
  {
    path: '/500',
    name: 'error-500',
    title: '500-服务端错误',
    component: () => import('../views/error/500.vue')
  },
  {
    path: '/*',
    name: 'error-404',
    title: '404-页面不存在',
    component: () => import('../views/error/404.vue')
  },
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  appRouter,
  ...commonRouters,
];
