# SalesLoft UI Exercise - Sean R Reid

Hi, I'm Sean. Welcome to this repo!

## Brief Overview

I used `create-react-app` and spun up a quick React App for this exercise. To be honest, React is absolutely overkill for a project of this scope. But, I've been writing a _lot_ of React recently, so I went with that framework to keep context switching to a minimum.  I wanted to just jump into the project, and React was my most accessible tool at the moment.

There isn't any SASS used in this project. I've found myself using SASS less and less recently. If you _want_ to see what I've done in SASS, I have some Wordpress boilerplate that I wrote, which includes an entire custom SASS setup, which leverages both Bourbon and Neat from Thoughtbot (https://www.bourbon.io/).  

Since moving to component based architecture, I prefer to localize my CSS to each individual component, and keep my global selectors somewhat lean.
For this exercise, global selectors are in `index.css`, some app globals are in `App.css`, and everything else is in a a CSS file in its associated component folder.

With a project that has a broader scope/timeline, I would probably look into including PostCSS instead of SASS.  Neither of those are enabled by default in `create-react-app`, and it just wasn't worth jumping through the hoops of ejecting the build for the scope of this exercise.

Ideally, I'd love to use CSS Modules, but I haven't done a deep dive into adding that into a React application. I've got experience with doing it in VueJS (which makes it _super_ simple), but haven't had an opportunity to work on it in React yet.  In lieu of that, I'm using a BEM-lite type syntax to manage namespacing and keep things sane in relation to my components. Overall, this project's scope was small enough that I didn't need to get too into the weeds with regards to namespacing. For a larger project, I'd probably be a bit more rigid with my BEM syntax (or, finally sort out CSS Modules in React). 


I also didn't use an pre-existing front-end style frameworks like Material, Foundation, or Bootstrap. I have some reservations with the "one-size fits all" approach many of those use. I've got a base set of styles and practices that I've carried with me, so, again, they're the most accessible tool at the moment. Although, I will admit that the color header and gray footer does have a Bootstrap-ish quality to it, demonstrating the limitations of my skills with regards to aesthetic design.

## What can the app do?

It will load all the messages from the `emails.json` file, and display them in a list.  Byt default, the user is presented with the message sender, timesetamp, subject line, tags, and a snippet of the message body. Clicking on an entry, or the expand (downward arrow) icon, in the upper right hand corner, will expand the entry to show the entire body of the message.

The user can expand/close each entry independently, and can also Archive a message via an icon in the lower right hand corner.  This is just mocked up, I'm just updating the component state, not actually modifying the JSON file. If you archive all the messages, you'll be presented with a celebratory message for reaching "inbox zero." 

The list of available tags is displayed in a sidebar. The sidebar will stack on top of the Messages List at resolutions < 1024px, and moves to the right on resolutions > 1024px.  I mocked up a second JSON file, `tags.json`, to act as an endpoint to fetch all the available tags. I added a third tag, "household", just to have a difference between the messages and tag list.  I could have run through the `email.json` file and built an array of tags dynamically, but my array-manipulation-fu is a bit clumsy, so creating a new endpoint was going to be quicker. 

## Anything else?

Uhm, maybe? Check the `git log`, I'm probably forgetting something, but it's likely the answer is in the logs. Maybe? 

"Didja ever dance with the devil in the pale moonlight?" I always like to ask that, I mostly just like the sound of it... #batman

### Instructions

* To install the app: 
    * clone this repo
    * switch to the `develop` branch
    * `yarn install`
* To run app: 
    * `yarn run`
* To run the Message Component test: 
    * `yarn test message.test.jsx`
* To view it online:
    * http://torchcodelab.com/ui-exercise/
    
