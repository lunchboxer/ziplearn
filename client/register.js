Template.register.events({
  'submit #register-form': function(e, t) {
    e.preventDefault()
    var email = t.find('#account-email').value,
      password = t.find('#account-password').value

    // remove whitespace from email
    var trimInput = function(val) {
      return val.replace(/^\s*|\s*$/g, "")
    }
    var trimemail = trimInput(email)

    // password must be at least 6 characters
    var isValidPassword = function(val) {
      return val.length >= 6 ? true : false;
    }

    if (isValidPassword) {

      Accounts.createUser({
        email: trimemail,
        password: password
      }, function(err) {
        if (err) {
          // TODO: add some real error messaging
          console.log("There was an error")
          console.log(err)
        } else {
          // TODO: show a message
          console.log("Account created successfully")
        }

      })
    }

    return false
  }
});
