<h1>The Thought Corner</h1>

Custom article portfolio project

<h1>Screenshots</h1>

![Screenshot](https://github.com/ryj1023/The-Thought-Corner/blob/master/Screenshot1.png)
![Screenshot](https://github.com/ryj1023/The-Thought-Corner/blob/master/Screenshot2.png)
![Screenshot](https://github.com/ryj1023/The-Thought-Corner/blob/master/Screenshot3.png)



<h1>Overview</h1>

The Thought corner is for anybody that is interested in gaining knowledge about the latest cutting edge topics. Everything from what the latest on the stock market is, scientic studies about future technologies, and favorite football team is doing, all in one place. The default setting for the user is articles based on a variety of topics, with other options for most recent articles, and editors picks. The user can also do a custom search by keyword(s) to have the app display content orderd by most to least recent. Every time the user is on the front page of the app, there are different famous quotes that are displayed that give create a refreshing theme to their day. Each of the articles contains a thumbnail and short description to peak the readers interest. They then have the option to read more about the articles on the New York Times website. The page also contains an "About" seciton, which outlines the general goal and purpose for the app.

<h1>Why Care?</h1>

In an age where we have information at our fingertips, this app provides a single stop for just about any users interest. The artcles pull from the "New York Times" API, so the articles will always be credible and vast. This platform is perfect for the user that wants to stay informed and would also just like to stay in touch with topics specific to their interests.

<h1>UX</h1>
This app is designed for the user to be able to freely scroll through articles with a mobile-first approach. The app is simple and easy to navigate, making it useful and user friendly.


<h1>Working Prototype</h1>

You can access a working prototype of the app here: https://ryj1023.github.io/The-Thought-Corner/build/

<h1>Technical</h1>

The app is built using AngularJS for the front-end. The routes are all done in the front-end, and there are multiple views with a custom directive each display scenario. There are two API calls, one is used with a custom service and an AJAX call to obtain the quotes from the Random Famous Quotes API, and another custom service to onbtain the New York Times articles from the site's API on a conditional basis. Angular's ng-view is used based on what the user does. The default view is the homepage, which displays content based on pre-defined topics. When the user does a custom search, or selects another article content option, the ng-view is changed in response to the event and show the relative data. Angular Materials card feature is one of the dependencies used to display each article. A custom directive is returned to display the data. 

<h1>Upcoming Features</h1>

Some of the upcoming features include user profiles with custom settings, using NodeJS, MongoDB, and ExpressJS. There will also be a blog section which allows the user to create a profile and publish their own work on any topic of their choosing. 
