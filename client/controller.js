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
  'click .pause' : function () {
    controlStream.emit('pause')
  }
})
