controlStream = new Meteor.Stream('chat')

Template.controller.events({
  'click .prev' : function () {
    controlStream.emit('prev')
  },
  'click .next' : function () {
    controlStream.emit('next')
  },
  'click .restart' : function () {
    controlStream.emit('restart')
  },
  'click .last' : function () {
    controlStream.emit('last')
  },
  'click .pause' : function () {
    controlStream.emit('pause')
  }
})
