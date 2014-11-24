// create a test user on reset
Meteor.startup(function() {
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

  if (!Meteor.roles.findOne({name: "controller"}))
    Roles.createRole("controller");

  if (!Meteor.roles.findOne({name: "admin"}))
    Roles.createRole("admin");

  adminUser = Meteor.users.findOne({
    username: 'james'
  })
  if (adminUser)
    Roles.addUsersToRoles(adminUser, ['admin', 'controller']);
})
