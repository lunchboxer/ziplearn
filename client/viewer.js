controlStream = new Meteor.Stream('control');

controlStream.on('prev', function () {
  Reveal.prev()
})

controlStream.on('next', function () {
  Reveal.next()
})

controlStream.on('restart', function () {
  Reveal.slide(0,0,0)
})

controlStream.on('pause', function () {
  Reveal.togglePause()
})

Template.viewer.helpers({
  'theme' : 'blood'
})

Template.viewer.rendered = function() {
  // $.getScript('/js/head.min.js')
  $.getScript('/js/reveal.min.js', function () {
    Reveal.initialize({
      transition: 'zoom',
      backgroundTransition: 'none',
      controls: false
    })
  })
}
