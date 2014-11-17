controlStream = new Meteor.Stream('control');

controlStream.permissions.write(function() {
  return true;
});

controlStream.permissions.read(function() {
  return true;
});

controlStream.addFilter(function(eventName, args) {
  if (this.userId) {
    var user = Meteor.users.findOne(this.userId);
    return [args[0], user.username];
  } else {
    return args;
  }
});
