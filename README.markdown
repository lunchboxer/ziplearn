# ZipLearn #
I decided to go in a different direction with the development of presentator and give it a shorter, more descriptive, and more appropriate name. What it is? It's a webapp for dynamically presenting classroom content with interactive possiblities for the students. At first it was a slideshow that I could easily control with my phone. Then I wanted to let the students use their phones to participate in instant polls which assess comprehension and give the one leading the class instant feedback. I also decided that I wanted complex interactive widgets in the presentation such as a scoreboard for games, a timer, and even a simple whiteboard. Then I thought wouldn't it also be cool if the students could use their phone for references while during the class. They could look at notes for the class, review vocad used or see example sentences. In short I wanted to use a webapp to empower the students and the one leading the class to be more involved and deliver or receive content in the most time-appropriate manner possible.

## Technical structure ##
The whole app can be divided into three working parts (from the developer's point of view, not the user's): A django server provides a RESTful interface for the data, an Ember.js based front-end app handles not only presentation but most of the application logic (basically those parts not directly involved with getting data in and out of the data-store on the backend, and a websocket server providing a real-time communication link between the presentation display, it's controller, and the students.

Since its serving a REST api the data backend can be replaced with anything else that serves the data in a similar format without having to make any changes to the other two parts. All three parts are loosely coupled in this way.

## Process ##
Currently the app has no implemented functionality. The path to 0.9 (working, if buggy, implementation of basic features) is as folows:

- [x] properly outline the intended functionality of the app
- [x] set up all models
- [ ] set up api for models
- [ ] build front-end with ember, no data
- [ ] integrate data
- [ ] implement websocket features
- [ ] style
- [ ] optimize

Later there are other features already conceived which will need to be built, and there will need to be some serious testing/bug-fixing/tweaking. 

## Functionality ##
Here's the breakdown of the app from the user's point of view. It also has three main parts but their not 100% independent of each other. The first is the **display**, which is presenting our learning content via projector or TV attached to a computer running a browser in fullscreen. At first this project was conceived to run on the raspberry pi (server and browser) to be attached behind a large flatscreen, but the minimal graphics capabilities in X and the i/o bottlenecks make such a setup impracticle. Next, is the **student** view which shows instant polls and various reference materials on the student's smartphone browser. Finally the **leader** view run on a mobile device and allows the one leading the class to control the display as well as presenting useful information such as a summary of instant poll responses and notes for the presentation.

This (upcoming) version will not support audio or video content, or even images.

### Display ###
The display view as the name suggests has no local input. It starts up with a placeholder and waits for instructions from the leader via websocket. The first command it expects is which lesson to load. Further commands depend on the context of each "slide" in the lesson. For instance a simple slide as one would see in a basic powerpoint presentation would accept "forward" and "backward" commands, advancing to the next slide or going back to the previous one. The diplay view also has seperate logic for presenting each of the different slide types, such as stopwatch, timer, scoreboard, poll results, game results, video, and slides with embedded audio. The display view is at root/display url.

### Student ###
Both the student and leader will start at a landing page, which requires the user to login to continue. If the user not a member of the leader group they will continue to the student view. The simplest of the three the student view has the following subviews accounts (login, register, user-profile), lesson notes and instant polls.

### Leader ###
If the user is a member of the leader group then the leader view is loaded automatically. After connecting to the websocket server it gets the current state of the display. If a lesson is on-going then the leader loads the proper state, so that if the person leading the class is disconnected for any reason they can simply reconnect and continue the lesson from the last state the handled by the display instead of restarting the lesson and quickly skipping ahead. The main subview for the leader is a dynamic set of controls of the lesson display, dependent on the current lesson slide. The simplest would be a set of "forward" and "back" buttons. In addition the leader can view presentation notes. It's easy to imagine some more advanced options like viewing poll results in real-time to see how many of the students have responded and how. It might also be useful for the leader to edit the slides, or insert display items on the fly, such as put up a timer or pop up a whiteboard, but these are all future version features.

## Install ##
Before it will run, you'll need to add a local_setting.py file to the django project in the same directory as settings.py. See local_settings.sample for how that should look.
