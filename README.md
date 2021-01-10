# University of Minnesota Coding Boot Camp - Fall-Winter 2020-2021
## Assignment #13 Node Express Handlebars: Eat Da Burger
<br/>

![example gif](/example/example.gif)

download link to high quality video:
https://drive.google.com/file/d/1U_3GJ1NJ17rObDnR6KwYVd_P7HtUrtAF/view

### Overview

The focus of this assignment was to harness the power of Node.js, Express, Handlebars, MySQL, jQuery and HTML/CSS to create **BURGER EATING SIMULATOR**!

Burger Eating Simulator is a very simple website that allows the user to add burgers to a persistent MySQL database, with elements that can be updated, and ultimately deleted entirely from the database.  All while utilizing the HandleBars view framework to render HTML updates.  Finally, we are utilizing Heroku to deploy our project, which interfaces with JawsDB to maintain our database.


### Review of Tasks

Like week twelve's homework, this was equally challenging and rewarding in regards to the knowledge and new skills acquired this week.  While frustrating at times, the understanding slowly dawned on my and I am extremely thankful.

This week we learned the concept of ORM - object-relational mapping.

The concept is fairly straight forward: you create a generic/broadly defined collection of functions to interact with your database.  Once you create this broadly defined, generic collection of tools, you further customize the ORM by creating a model that interacts with the database through the ORM.  This allows you to create multiple custom models based on the basic ORM you create. 

While this project only utilizes one model: burgers, the ORM we created could quickly be re-tooled for a "milkshake" model, for instance.  

In addition to ORM creation, this project also saw the integration of HandleBars, which is a view template engine used with express.  This allows a coder to quickly replicate bits of HTML code and insert them into designated layouts.


#### Here are the steps taken to achieve this complete this week's homework project:

* Built initial file system structure and deployed basic blueprint to Github to complete repository construction.
* Sketched out pseudo code logic and transcribed them into the code as comments.
* Created GitHub repository and linked Heroku hosting platform and JawsDB addon.
* Initialized my node project and installed the express, express-handlebars and mysql packages.
* Wrote database schema & seeds with Workbench and built the database & tables.
* Wrote connection.js which housing the localhost mysql database connection info.
* Wrote the ORM, which is a collection of basic/generic mysql database interactions.
* Wrote the custom burger ORM model which takes the generic orm and further customizes it.
* Wrote router.js which handles our various routes used to interact with the website.
* Wrote the HTML code for the main layout as well as the index page.
* Wrote HTML code for the handlebar partial files.
* Wrote the front-end javascript code which handles the user events & HTML methods.

*After multiple trial and error debugging sessions, all applied logic appears sound and no bugs can be generated from purposeful negligent entries.  From this point, it was time to clean up:*

* Refactor reduntant and worthless code.
* Removed multiple, annoying console.log commands used for debugging.
* Double-checked to ensured code was properly formatted and commented before submission.
* Used code validation service.
* Wrote README.MD file.
* Added screenshots to README.
* Deployed project to Heroku.
* Submitted required links to bootcampspot.com for credit.
 

### Installation

Installation should be fairly straightforward, but here's a quick guide to get up and running, assuming you have **Node.js**, **MySQL** and **Git** (with the accompanying interface **Git Bash**) installed.

* from your shell input the command: `git clone https://github.com/infiniteoo/homework_week_13_eat_da_burger.git`
* from the working directory, type `npm install` to install the required packages
* once all modules are downloaded, type `node server` to run
* ensure MYSQL is downloaded and your server is running.  run `schema.sql` in the `db` directory.
* direct your browser to `http://localhost:3000` to interact with the website.


### Live Example (Deployed on Heroku)

https://guarded-springs-46026.herokuapp.com/


### License

Distrubuted under the **GNU Public License** for the Univeristy of Minnesota Part-Time Full Stack Coding Boot Camp.  Please see `LICENSE` in the repository for more details.














