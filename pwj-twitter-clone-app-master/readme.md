# General TODOS

## DONE(Together): Create the home page structure for index.html

That involves the navigation, tweets list, and trending hashtags section.

## DONE: Create HTML and Style for Navigation

Use Mockup for styles like border

It needs to follow a class structure like this:

    class navigation

        class logo

            <i class="fab fa-twitter"></i>

        class home-link

            <i class="fas fa-home"></i>

        class profile-container

            class profile 

## DONE(Together): Create HTML and Style for Input Box

## DONE(Together): Create HTML and Style for Individual Tweet

### DONE: Complete User Info HTML and Styling

It needs to follow a class structure like this:

    class tweet-user-info

        class tweet-user-profile

        class tweet-user-name-container

            class tweet-user-fullname

            class tweet-user-username

#### HINTS:

    User Profile: width: 30px; height: 30px;

    User Full Name: font-size: 10px

    User Twitter Handel: font-size: 8px

## DONE(Together): Create HTML and Style for Trending Box

### DONE: Complete styling for list of trends

#### HINTS:

    List Item: padding-left: 20px; padding-top and bottom: 8px

## DONE (API): Set up NodeJS Server

Return `Hello World` for the root `/` get request

[Example](https://expressjs.com/en/starter/hello-world.html)

## DONE (API, TOGETHER): Create API endpoint `/tweeets` to return a list of tweets based on query

Use [axios](https://github.com/axios/axios) for making an API request to Twitter API

Console log the data

Return as a response

## DONE (API): Create Twitter `get()` helper function to move the Twitter API logic

#### HINTS:

    - Create Twitter class inside `api/helpers/twitter.js`
    - Create a `get()` function that takes in the necessary parameters
    - Inside `get()` return `axios.get(...)`
    - Import Twitter class in `app.js` with `const twitter = new Twitter();`
    - Initialize and use the `twitter` object to now do somethong like `twitter.get(...).then(...).catch(...)`

## DONE(API, TOGETHER): Move the API Token to .env file and import it

## DONE: Complete `getTwitterData()` function to retrieve data from our API

For now, I want you to use the following static url to get data from api:

```http://localhost:3000/tweets?q=coding&count=10```

#### HINTS:

    - Use `fetch()`
    - Call function on load of js
    - Console log response

## DONE: Get search input and use it to build a `url` like the one above

This time you are building a dynamic url that will change based on the user's search input

#### HINTS:

    - Call `getTwitterData()` function when a user clicks on search icon
    - Use string literals to build out the url
    - Console log response

### DONE(Together): Get twitter data when a user hits enter


## DONE: Complete `buildTweets()` function to show the Tweets List(only text)

#### HINTS:

    - Call `buildTweets()` function from `getTwitterData()`
    - Use List.map() to loop over the list of tweets
    - Use string literals to replace html with the text from each tweet
    - Replace html content inside `.tweets-list`

## DONE: Add abiliy to show images in the tweets

#### HNTS:

    - Use `buildImages()` function
    - Check if there is media using `.length`property to call `buildImages()` function

## DONE(Together): Add ability to show videos in the tweets

## DONE(Together): Add ability to show gifs in the tweets

## DONE: Show user info in the tweets

## DONE(Together): Use [moment.js](https://momentjs.com/) to show the date of tweet

## DONE: Complete `selectTrend()` function to allow a user to click on the trend and search for it

#### HINTS:

    - Call `selectTrend()` function from list item click
    - Get the inner text of list item
    - Set the value of input search using the text
    - Call `getTwitterData()` function

## DONE: Create HTML and Style for Next Page Button

#### HINTS:

    - Use `next-page-container` class
    - border-radius: 20px; margin-top: 20px;
    - Use arrow down font awesome icon

## TODO(Together): Showing Next Page of Tweets

### TODO: Save Next Page Url

### TODO: Load tweets when selecting the next page button

[Here](https://developer.twitter.com/en/docs/tweets/timelines/guides/working-with-timelines) is how twitter pagination works

### TODO(API): ...something that has to do with `max_id`

### TODO: Fix logic to replace tweets when searching, but append tweets when going to next page

### TODO: Show next page button only when there is a next page

## TODO: Clean Up

## WE ARE DONE!
















