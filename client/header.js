Template.header.events({
  // close navbar when something is clicked
  'click .navbar-collapse ul li a:not(.dropdown-toggle)': function () {
    $('.navbar-toggle:visible').click()
  }
})
