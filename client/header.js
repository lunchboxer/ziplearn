Template.header.helpers({
})

Template.header.events({
  'click .nav-collapse a': function () {
    navigation.close()
  },
  'click #logout' : function () {
    Meteor.logout()
  }
})

Template.header.created = function() {
  // $.getScript("/js/fixed-responsive-nav.js")
}
Template.header.rendered = function() {

}
