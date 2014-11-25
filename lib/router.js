Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
})

var requireLogin = function() {
  if (!Meteor.user()) {
    this.render('home')
  } else {
    this.next()
  }
}

Router.onBeforeAction(requireLogin, {
  except: ['home', 'about']
});

Router.route('settings')
Router.route('about')
Router.route('/controller', {
  name: 'controller',
  onBeforeAction: function() {
    user = Meteor.user()
    if (!Roles.userIsInRole(user, ['controller'])) {
      this.render('notAuthorized')
    } else {
      this.next()
    }
  }
})

Router.route('/', {
  name: 'home'
})

Router.route('/shows', {
  name: 'showsList',
  waitOn: function () {
    return Meteor.subscribe('slideshows')
  }
})

Router.route('/show/:_id', {
  name: 'slideshow',
  layoutTemplate: 'viewerLayout',
  waitOn: function () {
    return Meteor.subscribe('singleShow', this.params._id)
  },
  data: function () {
    return Slideshows.findOne(this.params._id)
  }
})
