Meteor.publish(null, function (){
  return Meteor.roles.find({})
})

Meteor.publish('slideshows', function () {
  return Slideshows.find()
})

Meteor.publish('singleShow', function (id) {
  check(id, String)
  return Slideshows.find(id)
})
