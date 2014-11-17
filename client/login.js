Template.login.events({

  'submit #login-form': function(e, t) {
    e.preventDefault();
    // retrieve the input field values
    var email = t.find('#login-email').value,
      password = t.find('#login-password').value;

    // Trim and validate fields ....

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Meteor.loginWithPassword(email, password, function(err) {
      if (err) {
        console.log("there was an error")
        console.log(err)
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed.
      } else {
        console.log("logged in")
        if (Router.current().route.getName() === 'login') {
          // if we are on the login route, we want to redirect the user
          return Router.go('home')
        }
      }
    });
    return false;
  }

});
