Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
})

Router.route('settings', {
  name: 'settings'
})

Router.route('about', {
  name: 'about'
})

Router.route('/', {
  name: 'home'
})

Router.route('login', {
  name: 'login'
})

Router.route('register', {
  name: 'register'
})

Router.route('controller', {
  name: 'controller'
})

Router.route('viewer', {
  layoutTemplate: 'viewerLayout',
  name: 'viewer'
})
