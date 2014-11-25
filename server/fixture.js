// populate database with initial values
Meteor.startup(function() {
  // create a default user
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: 'james',
      email: 'email@example.com',
      password: 'password',
      profile: {
        first_name: 'James',
        last_name: 'Smith'
      }
    });
  }

  // create roles
  if (!Meteor.roles.findOne({name: "controller"}))
    Roles.createRole("controller");

  if (!Meteor.roles.findOne({name: "admin"}))
    Roles.createRole("admin");

  adminUser = Meteor.users.findOne({
    username: 'james'
  })
  // assign them to the default user
  if (adminUser)
    Roles.addUsersToRoles(adminUser, ['admin', 'controller']);

  if (Slideshows.find().count() === 0) {
    Slideshows.insert({
      title: 'Introducing Ziplearn',
      slides: '<section><h1>ZipLearn</h1><h3>Example slideshow</h3></section>' +
              '<section><h2>This is a slide</h2></section>' +
              '<section><h2>This is another slide</h2></section>' +
              '<section><h1>THE END</h1></section>'
    })
  }
})
