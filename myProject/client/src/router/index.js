import Vue from 'vue'
import Router from 'vue-router'
import App from '../view'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path:"/",
        redirect: '/view/shouye',
    },
    {
      path: '/view',
      component: App,
      children: [
        {
          path: 'shouye',
          component: () =>
            import('../components/Shouye'),
        },
        {
          path: 'shop',
          component: () =>
            import('../components/Shop'),
        },
        {
          path: 'mine',
          component: () =>
            import('../components/My')
        }
      ]
    },
    {
      path: '/login',
      component: () =>
        import('../components/Login')
    },
    {
      path: '/Page',
      component: () =>
        import('../components/Page')
    },
  ]
})
