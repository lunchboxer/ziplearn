# ZipLearn #
I decided to go in a different direction with the development of presentator and give it a shorter, more descriptive, and more appropriate name. What it is? It's a webapp for dynamically presenting classroom content with interactive possiblities for the students. At first it was a slideshow that I could easily control with my phone. Then I wanted to let the students use their phones to participate in instant polls which assess comprehension and give the one leading the class instant feedback. I also decided that I wanted complex interactive widgets in the presentation such as a scoreboard for games, a timer, and even a simple whiteboard. Then I thought wouldn't it also be cool if the students could use their phone for references while during the class. They could look at notes for the class, review vocad used or see example sentences. In short I wanted to use a webapp to empower the students and the one leading the class to be more involved and deliver or receive content in the most time-appropriate manner possible.

## Technical structure ##
The whole app can be divided into three working parts (from the developer's point of view, not the user's): A django server provides a RESTful interface for the data, an Ember.js based front-end app handles not only presentation but most of the application logic (basically those parts not directly involved with getting data in and out of the data-store on the backend, and a websocket server providing a real-time communication link between the presentation display, it's controller, and the students.

## Process ##
Currently the app has no implemented functionality. The path to 0.9 (working, if buggy, implementation of basic features) is as folows:
    * set up django REST framework server
    * properly outline the intended functionality of the app
    * set up all models
    * build front-end with ember
    * implement websocket features
    * style
    * optimize

Later there are other features already conceived which will need to be built, and there will need to be some serious testing/bug-fixing/tweaking. 
