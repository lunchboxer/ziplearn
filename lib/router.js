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

Router.route('controller', {
  name: 'controller'
})

Router.route('viewer', {
  layoutTemplate: 'viewerLayout',
  name: 'viewer'
})
