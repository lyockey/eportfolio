# Resume Project

Adv Web 2 / Lauren Yockey / November 25, 2016

_Sorry in advance for the world's longest README!_

## Links
* [GitHub Repo](https://github.com/lyockey/project_resume_yockey_lauren)

* [Live site](http://laurenyockey.com/adv_web_2/project_resume_yockey_lauren/#)

* [W3C Validator](https://validator.w3.org/unicorn/check?ucn_uri=laurenyockey.com%2Fadv_web_2%2Fproject_resume_yockey_lauren%2F&ucn_task=conformance#)

* [HTML5 Outliner](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Flaurenyockey.com%2Fadv_web_2%2Fproject_resume_yockey_lauren%2F)


## Resources

### Plugins

* [Animate Scroll](http://plugins.compzets.com/animatescroll/#)

    I used this scroll plugin on my navigation to add some flair to my single-page site. Adding the animation was a (relatively) easy way to make my site appear more interactive. It can be viewed by clicking on any of the navigation links. However, I noticed that the animation is not compatible with mobile devices -- or at least, it did not work on mine.

* [jQuery Toast](http://kamranahmed.info/toast)

    This was a fun and easy little plugin that I stumbled on simply because the name was intriguing. I had no idea that Toast was a slang term for a little popup notification window in the browser. This plugin was the most straightforward; I pretty much just had to plug-and-chug. It can be seen in the bottom right-hand corner of the browser with links to my LinkedIn and GitHub.

* [Progress Bar (JavaScript)](https://kimmobrunfeldt.github.io/progressbar.js/)

    From the beginning of my project, I knew I wanted animated skills bars. After some extensive searching, I found this plugin, which had both the animation and aesthetics I was going for. Implementing it was actually easier than I thought once I played around with it for a while. The plugin can be seen in the Skills section, with each bar loading to reflect the level of my skill.

    **Note**: for styling and experimenting purposes, I referenced the plugin author's [JSFiddle](https://jsfiddle.net/kimmobrunfeldt/rfny4ftb/)

* [Waypoints](http://imakewebthings.com/waypoints/shortcuts/inview/)

    I needed a way to control my Progress Bar plugin's animation so that it wouldn't start until after the user scrolls into view of the Skills section, otherwise the animation (and plugin) is useless. This plugin can't exactly be seen or knowingly interacted with on the page, but you know it's doing it's job when the skills bars animate after entering into the viewport.


### References & Other Resources

* [jQuery API - .replaceWith()](http://api.jquery.com/replacewith/)

    This is the site I reference for my custom jQuery. I realized I hadn't used my "Hire me" button for anything and thought it would be a good opportunity to try some hand-coded jQuery. I came up with the concept of a one-line email submission form, and I asked Google how to use jQuery to replace content once a button was clicked and I found the `.replaceWith()` method. I then added the first event listener to listen for a click on the Hire Me button, and to replace the button with the form. On the next line within the same scope, I added a second event listener to listen for a click on the Submit button. Once the submit button was clicked, I used `.replaceWith()` again to substitute the form for a thank-you blurb. It worked on the very first try and I did a happy dance!

* Canvas links:
    * [Hands-On Responsive Transformation](https://ufl.instructure.com/courses/330762/pages/hands-on-responsive-transformation?module_item_id=6205785)

        I used this page to reference the `meta viewport` tag, media queries, and the `.visuallyhidden` CSS property.

    * [Calc & Lobotomized Owl](https://ufl.instructure.com/courses/330762/pages/calc-and-box-sizing-and-lobotomized-owl?module_item_id=6205789)

        I referenced this page for the box-sizing properties.

    * [Discussion - jQuery Plugins](https://ufl.instructure.com/courses/330762/discussion_topics/1166235)

        All of my jQuery plugins were found on the list of jQuery plugins on this discussion page. I purposefully wanted to use plugins you recommended to make sure that they met the documentation and other requirements.

* Images
    * [Banner Image](https://unsplash.com/search/computer-desk?photo=vATgbfp7oXA)

    * [Skills Image](https://unsplash.com/search/computer?photo=6g0KJWnBhxg)

    * [Education Image](http://galined.com/wp-content/uploads/2016/09/University-of-Florida.jpg)

* [Treehouse - Background with color overlay with opacity in CSS](https://teamtreehouse.com/community/background-with-color-overlay-with-opacity-in-css)

    I wanted to tone down the background images so the text wouldn't be so hard to read. This was a pretty straightforward reference showing how to use a `linear-gradient` alongside the image's URL.


## Deductions
_I reviewed the list of deductions for this project and in the syllabus._


## Comments
1. Thanks for all of your help with my jQuery! I'm really happy with how my site turned out.

2. I was going for a really sleek and clean design, so that is why everything is centered and given its own line throughout the different screen sizes. I also wanted the sections without a background image to be free of too many colors or too much text, since the sections with background images offered so much visually. I also wanted the interactivity/animation of the page to be the focus more than the design.

4. Instead of listing my contact information, I placed my contact in the form of links, as I don't typically like to display my private information for the whole world to see :) And I thought the buttons just fit better with the simplicity of the site.

5. Other than all of the bugs I ran into, this was a really fun project! I've been wanting a better personal website and this was a great opportunity to make one that I can use professionally. Thanks!
